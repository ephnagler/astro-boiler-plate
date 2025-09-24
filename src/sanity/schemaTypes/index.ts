import type { SchemaTypeDefinition } from 'sanity';
import { templateType } from './documents/template';
import { projectType } from './documents/project';
import { blogType } from './documents/blog';
import { eventType } from './documents/event';
import { galleryType } from './documents/gallery';
import { siteSettingsType } from './settings';
import { pageType } from './documents/page';
import { sectionType } from './objects/section';
import { colorSchemeType } from './documents/colorScheme';
import { heroType } from './objects/hero';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    templateType,
    projectType,
    blogType,
    eventType,
    galleryType,
    siteSettingsType,
    pageType,
    sectionType,
    colorSchemeType,
    heroType,
  ],
};
