import { defineField, defineType } from "sanity";

export const pageType = defineType({
    name: "page",
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
            name:"featuredImage",
            type:"image",
        }),
        defineField({
            name: "sections",
            type: "array",
            of: [{ type: "section" }],
        }),
    ],
});