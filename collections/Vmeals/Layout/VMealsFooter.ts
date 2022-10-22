import { CollectionConfig } from 'payload/types';

const VMealsFooter: CollectionConfig = {
    slug: 'VMealsFooter',
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
            name: 'VMealsFooterEnableDisables',
            type: 'text',
            label: 'VMeals Footer Enable / Disables',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFooter',
            label: 'VMeals Footer Copy Right Text',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsFooterList',
            type: 'array',
            label: 'VMealsFooter List',
            minRows: 1,
            maxRows: 5,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsFooterItemTitle',
                    label: 'VMeals Footer Item Title',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: true,
                },
                {
                    name: 'VMealsFooterItemUploadFile',
                    label: 'VMeals Footer Upload File',
                    type: 'upload',
                    relationTo: 'media',
                    admin: {
                        readOnly: false,
                    },
                    required: true,
                }
            ]
        }
    ]
};

export default VMealsFooter;