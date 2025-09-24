import { defineField, defineType } from 'sanity';

export const colorSchemeType = defineType({
  name: 'colorScheme',
  type: 'document',
  fields: [
    defineField({
      name: 'colorScheme',
      type: 'string',
    }),
    defineField({
      name: 'baseBg',
      title: 'Base Background Color',
      type: 'color',
    }),
    defineField({
      name: 'baseText',
      title: 'Base Text Color',
      type: 'color',
    }),
    defineField({
      name: 'accentBg',
      title: 'Accent Background Color',
      type: 'color',
    }),
    defineField({
      name: 'accentText',
      title: 'Accent Text Color',
      type: 'color',
    }),
  ],
});
