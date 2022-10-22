import { CollectionConfig } from 'payload/types';

const VMealsAddOns: CollectionConfig = {
  slug: 'VMealsAddOns',
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
        name : 'VMealsAddOnsList',
        type: 'array',
        label: 'VMeals Add Ons List',
        minRows: 1,
        maxRows: 5,
        labels: {
            singular: 'Slide',
            plural: 'Slides',
        },
        fields: [
            {
                name: 'VMealsAddOnsEnableDisables',
                type: 'text',
                label: 'VMeals Add Ons Enable / Disables',
                admin: {
                    readOnly: false
                },
                required: true
            },
            {
                name: 'VMealsAddOnsTitle',
                type: 'text',
                label: 'VMeals Add Ons Title',
                admin: {
                    readOnly: false
                },
                required: true
            },
            {
                name: 'VMealsAddOnsVMealsAllergiesName',
                type: 'text',
                label: 'VMeals Add Ons Allergies Name',
                admin: {
                    readOnly: false
                },
                required: true
            }
        ]
    }
  ]
};

export default VMealsAddOns;