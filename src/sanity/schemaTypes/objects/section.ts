import { defineField, defineType } from "sanity";

export const sectionType = defineType({
    name: "section",
    type: "object",
    fields: [
        defineField({
            name: "name",
            type: "string",
        }),
        defineField({
            name: "blocks",
            type: "array",
            of: [{type: "block"}],
        })
    ]
});