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
        defineField({
            name: "excerpt",
            type: "text",
        }),
        defineField({
            name: "featuredImage",
            type: "image",
        }),
        defineField({
            name: "publishDate",
            type: "datetime",
        }),
        defineField({
            name: "author",
            type: "string",
        }),
        defineField({
            name: "content",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
});