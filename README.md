# Astro boiler plate

## Stack

- Astro
- Sanity
  - Plugin: color-input
- Tailwind

## Features

- Private Sanity dataset
- Embedded Sanity Studio
- Theme Templating from within one Sanity dataset.
  - Publish as many docs as you want.
    - Templates
    - Color Schemes
    - Pages
    - Posts
    - Projects
    - Galleries
    - Events
  - Only referenced docs in live template will be accessible.
- Extremely simple light / dark mode

## Type Safety

Using Sanity TypeGen for now, even though it's experimental. I like that I can generate types based on schema AND groq queries.

I might end up using GROQD + ZOD when the times comes. Using it explicitly over TypeGen didn't make sense to me, seemed like more work than necessary. However, seems useful for risky drifty queries:

```
import { z } from "zod";
import { loadQuery } from "../sanity/lib/load-query";
import type { PageDocument } from "../sanity/types.gen"; // from sanity-codegen

// Query-specific response type aligned with your projection
type SectionHero = {
  _key: string;
  _type: "hero";
  heading?: string;
  subheading?: string;
};

type SectionGallery = {
  _key: string;
  _type: "gallery";
  images: { _key: string; url: string | null }[];
};

type PageResponse = Pick<PageDocument, "_id" | "_type" | "name"> & {
  slug: { current: string };
  sections: (SectionHero | SectionGallery)[];
};

// Zod only for the risky part
const GallerySectionSchema = z.object({
  _key: z.string(),
  _type: z.literal("gallery"),
  images: z.array(
    z.object({
      _key: z.string(),
      url: z.string().url().nullable(), // may be null from GROQ coalesce
    })
  ).min(1, "Gallery requires at least one image"),
});

// Optional: validate entire page minimally, but focus enforcement on gallery items
const PageSchema = z.object({
  _id: z.string(),
  _type: z.literal("page"),
  name: z.string().min(1).optional(), // UI may default this
  slug: z.object({ current: z.string().min(1) }),
  sections: z.array(
    z.union([
      z.object({
        _key: z.string(),
        _type: z.literal("hero"),
        heading: z.string().optional(),
        subheading: z.string().optional(),
      }),
      GallerySectionSchema
    ])
  )
});

export async function getPage(slug: string) {
  const { data } = await loadQuery<PageResponse | null>({
    query: /* the GROQ above */,
    params: { slug },
  });

  if (!data) return null;

  // Runtime validation: don’t let broken gallery content through
  const result = PageSchema.safeParse(data);
  if (!result.success) {
    // Log with paths to failing fields; decide your fallback
    console.warn("Invalid page content", result.error.flatten());
    // Example fallback: drop invalid gallery sections
    const sections = data.sections.filter((s): s is SectionHero | SectionGallery => {
      if (s._type !== "gallery") return true;
      const r = GallerySectionSchema.safeParse(s);
      return r.success && r.data.images.every(img => !!img.url);
    });
    return { ...data, sections };
  }

  // Optionally, further enforce URLs not null
  const validated = result.data;
  validated.sections = validated.sections.map(section => {
    if (section._type !== "gallery") return section;
    return { ...section, images: section.images.filter(img => !!img.url) };
  });

  return validated;
}

```
