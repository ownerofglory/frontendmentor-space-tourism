import {defineField, defineType} from "sanity";

export default defineType({
    name: 'crewMembers',
    title: 'Crew Members',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'position',
            title: 'Position',
            type: 'string',
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        })
    ]
})