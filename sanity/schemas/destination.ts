import {defineField, defineType} from "sanity";

export default defineType({
    name: 'destination',
    title: 'Destinations',
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
        defineField({
            name: 'avgDistance',
            title: 'Average Distance',
            type: 'string',
        }),
        defineField({
            name: 'estdTravelTime',
            title: 'Estimated Travel Time',
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