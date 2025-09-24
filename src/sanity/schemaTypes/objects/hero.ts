import { defineField, defineType } from 'sanity';

export const heroType = defineType({
  name: 'hero',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'subHeading',
      type: 'string',
    }),
    defineField({
      name: 'ctaText',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      type: 'reference',
      to: [
        { type: 'page' },
        { type: 'blog' },
        { type: 'project' },
        { type: 'event' },
        { type: 'gallery' },
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'lightColorScheme',
      type: 'reference',
      to: [{ type: 'colorScheme' }],
    }),
    defineField({
      name: 'darkColorScheme',
      type: 'reference',
      to: [{ type: 'colorScheme' }],
    }),
  ],
});
