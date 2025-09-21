import { ALL_FIELDS_GROUP, defineField, defineType } from "sanity";

export const templateType = defineType({
    name: "template",
    type: "document",
    groups:[
        {name:"preferences", title:"Preferences"},
        {name:"homePage", title:"Home Page"},
        {...ALL_FIELDS_GROUP,hidden: true,},
    ],
    fields: [
        defineField({
            name: "title",
            title: "Template Title",
            type: "string",
            group: "preferences"
        }),
        defineField({
            name: "homeSections",
            type: "array",
            of: [{type: "section"}],
            group: "homePage"
        }),
        defineField({
            name: "defaultColorScheme",
            type: "reference",
            to: [{type: "colorScheme"}],
            group: "preferences"
        })
    ]
});