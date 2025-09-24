// ./sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes';
import { deskStructure } from './deskStructure';
import { colorInput } from '@sanity/color-input';

export default defineConfig({
  projectId: 'n4olvw93',
  dataset: 'production',
  plugins: [structureTool({ structure: deskStructure }), colorInput()],
  schema,
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        // Hide the creation of "settings" documents if the context is global
        return prev.filter(
          (templateItem) => templateItem.templateId != 'siteSettings',
        );
      }
      return prev;
    },
  },
});
