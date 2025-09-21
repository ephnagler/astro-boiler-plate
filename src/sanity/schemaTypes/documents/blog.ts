import { defineField, defineType } from "sanity";

export const blogType = defineType({
    name: "blog",
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