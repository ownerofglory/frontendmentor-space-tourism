import {defineField, defineType} from "sanity";

export default defineType({
    name: 'launchSteps',
    title: 'Launch Steps',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        {
            name: 'image',
            title: 'Image',
            type: 'document',
            fields: [
                defineField({
                    name: 'landscape',
                    title: 'Landscape',
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
                }),
                defineField({
                    name: 'portrait',
                    title: 'Portrait',
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
        }
    ]
})