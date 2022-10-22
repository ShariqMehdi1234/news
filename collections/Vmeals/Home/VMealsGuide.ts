import { CollectionConfig } from 'payload/types';

const VMealsGuide: CollectionConfig = {
    slug: 'VMealsGuide',
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
            name: 'VMealsGuideEnableDisables',
            type: 'text',
            label: 'VMeals Guide Enable / Disables',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsGuideTitle',
            label: 'VMeals Guide Title',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsGuideBoldColorTitle',
            label: 'VMeals Guide Bold Color Title',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsGuideInputImages',
            label: 'VMeals Guide Images',
            type: 'upload',
            relationTo: 'media',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsGuideInputPlaceholderText',
            label: 'VMeals Guide Input Placeholder Text',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsGuideInputButtonTitle',
            label: 'VMeals Guide Input Button Title',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: true,
        }
    ]
};

export default VMealsGuide;