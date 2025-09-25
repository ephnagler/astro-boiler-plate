// sanity.cli.js
import { defineCliConfig } from 'sanity/cli';

const projectId = import.meta.env?.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env?.PUBLIC_SANITY_DATASET;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
