import { CollectionConfig } from 'payload/types';

const VMealsGetStarted: CollectionConfig = {
    slug: 'VMealsGetStarted',
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
            name: 'VMealsGetStartedEnableDisables',
            type: 'text',
            label: 'VMeals Get Started Enable / Disables',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsGetStarted',
            label: 'VMeals Get Started Title',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsGetStartedDescription',
            label: 'VMeals Get Started Description',
            type: 'textarea',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsGetStartedImage',
            label: 'VMeals Get Started Image',
            type: 'upload',
            relationTo: 'media',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsGetStartedList',
            type: 'array',
            label: 'VMeals Get Started List',
            minRows: 1,
            maxRows: 5,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsGetStartedItemTitle',
                    label: 'VMeals Get Started Item Title',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: true,
                },
                {
                    name: 'VMealsGetStartedItemDescription',
                    label: 'VMeals Get Started Item Description',
                    type: 'textarea',
                    admin: {
                        readOnly: false,
                    },
                    required: true,
                }
            ]
        }
    ]
};

export default VMealsGetStarted;