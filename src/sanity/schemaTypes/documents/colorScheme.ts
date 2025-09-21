import { defineField, defineType } from "sanity";

export const colorSchemeType = defineType({
    name: "colorScheme",
    type: "document",
    fields: [
        defineField({
            name: "colorScheme",
            type: "string",
        }),
        defineField({
            name: "backgroundColor",
            type: "color",
        }),
        defineField({
            name: "textColor",
            type: "color",
        }),
        defineField({
            name: "accentColor",
            type: "color",
        })
    ],
});