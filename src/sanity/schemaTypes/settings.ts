import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
    name: "siteSettings",
    type: "document",
    fields: [
        defineField({
            name: "siteTitle",
            title: "Site Title",
            type: "string",
        }),
        defineField({
            name: "liveTheme",
            type: "reference",
            to: [{ type: "theme" }],
            options:{
                disableNew: true,
            }
        }),
    ],
});