import { CollectionConfig } from 'payload/types';

const VMealsLanguages: CollectionConfig = {
    slug: 'VMealsLanguages',
    admin: {
        useAsTitle: 'title',
    },
    access: {
          read: (): boolean => true,
        create: (): boolean => true,
        update: (): boolean => true,
    },
    fields: [
        {
            name: 'VMealsLanguagesEnableDisables',
            type: 'text',
            label: 'VMeals Languages Enable / Disables',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsLanguagesList',
            type: 'array',
            label: 'VMeals Languages List',
            minRows: 1,
            maxRows: 5,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsLanguagesItemTitle',
                    label: 'VMeals Languages Item Title',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: true,
                },
                {
                    name: 'VMealsLanguagesItemslug',
                    label: 'VMeals Languages Slug',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: true,
                }
            ]
        }
    ]
};

export default VMealsLanguages;