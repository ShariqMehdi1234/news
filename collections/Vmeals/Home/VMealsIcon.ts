import { CollectionConfig } from 'payload/types';

const VMealsIcon: CollectionConfig = {
    slug: 'VMealsIcon',
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
            name: 'VMealsIconEnableDisables',
            type: 'text',
            label: 'VMeals Icon Enable / Disables',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsIconList',
            type: 'array',
            label: 'VMeals Icon List',
            minRows: 1,
            maxRows: 3,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsIconItemTitle',
                    label: 'VMeals Icon Item Title',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'VMealsIconItemLink',
                    label: 'VMeals Icon Item Link',
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

export default VMealsIcon;