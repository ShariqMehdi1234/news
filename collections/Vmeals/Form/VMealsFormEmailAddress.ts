import { CollectionConfig } from 'payload/types';

const VMealsFormEmailAddress: CollectionConfig = {
    slug: 'VMealsFormEmailAddress',
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
            name: 'VMealsFormEmailAddress',
            type: 'text',
            label: 'VMeals Form Email Address',
            admin: {
                readOnly: false
            },
            required: true
        },
    ]
};

export default VMealsFormEmailAddress;