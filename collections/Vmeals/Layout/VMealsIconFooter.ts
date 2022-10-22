import { CollectionConfig } from 'payload/types';

const VMealsIconFooter: CollectionConfig = {
    slug: 'VMealsIconFooter',
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
            name: 'VMealsIconFooterEnableDisables',
            type: 'text',
            label: 'VMeals Icon Footer Enable / Disables',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsIconFooterList',
            type: 'array',
            label: 'VMeals Icon Footer List',
            minRows: 1,
            maxRows: 5,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsIconFooterItemLinkUrl',
                    label: 'VMeals Footer Item Link Url',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: true,
                },
                {
                    name: 'VMealsIconFooterItemUploadFile',
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

export default VMealsIconFooter;