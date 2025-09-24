import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      type: 'string',
    }),
    defineField({
      name: 'liveTemplate',
      type: 'reference',
      to: [{ type: 'template' }],
      options: {
        disableNew: true,
      },
    }),
  ],
});
