import { defineField, defineType } from "sanity";

export const projectType = defineType({
    name: "project",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        }),
    ],
});