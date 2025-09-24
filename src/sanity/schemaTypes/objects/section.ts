import { defineField, defineType } from 'sanity';

export const sectionType = defineType({
  name: 'section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionType',
      type: 'string',
      options: {
        list: [
          { title: 'Hero', value: 'hero' },
          { title: 'Text Block', value: 'textBlock' },
          { title: 'Image Gallery', value: 'imageGallery' },
          { title: 'Blog Posts', value: 'blogPosts' },
          { title: 'Projects', value: 'projects' },
          { title: 'Events', value: 'events' },
          { title: 'Contact Form', value: 'contactForm' },
        ],
      },
    }),
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'subHeading',
      type: 'string',
    }),
    defineField({
      name: 'textContent',
      type: 'text',
      hidden: ({ parent }) => parent?.sectionType !== 'textBlock',
    }),
    defineField({
      name: 'richTextContent',
      type: 'array',
      of: [{ type: 'block' }],
      hidden: ({ parent }) => parent?.sectionType !== 'textBlock',
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
      hidden: ({ parent }) => parent?.sectionType !== 'imageGallery',
    }),
    defineField({
      name: 'blogPosts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blog' }] }],
      hidden: ({ parent }) => parent?.sectionType !== 'blogPosts',
    }),
    defineField({
      name: 'projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      hidden: ({ parent }) => parent?.sectionType !== 'projects',
    }),
    defineField({
      name: 'events',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'event' }] }],
      hidden: ({ parent }) => parent?.sectionType !== 'events',
    }),
    defineField({
      name: 'ctaText',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      type: 'url',
    }),
    defineField({
      name: 'colorScheme',
      type: 'reference',
      to: [{ type: 'colorScheme' }],
    }),
  ],
});
