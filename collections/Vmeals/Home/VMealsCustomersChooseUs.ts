import { CollectionConfig } from 'payload/types';

const VMealsCustomersChooseUs: CollectionConfig = {
    slug: 'VMealsCustomersChooseUs',
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
            name: 'VMealsCustomersChooseUsEnableDisables',
            type: 'text',
            label: 'VMeals Customers ChooseUs Enable / Disables',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsCustomersChooseUsTitle',
            label: 'VMeals Silder Bar Title',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsCustomersChooseUsDescription',
            label: 'VMeals Silder Bar Description',
            type: 'textarea',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsCustomersChooseUsList',
            type: 'array',
            label: 'VMeals Customers Choose Us List',
            minRows: 1,
            maxRows: 3,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsCustomersChooseUsItemImageIcon',
                    label: 'VMeals Customers ChooseUs Item Image Icon',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'VMealsCustomersChooseUsItemTitle',
                    label: 'VMeals Customers ChooseUs Item Title',
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

export default VMealsCustomersChooseUs;