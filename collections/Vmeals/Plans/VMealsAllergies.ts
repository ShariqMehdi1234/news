import { CollectionConfig } from 'payload/types';

const VMealsAllergies: CollectionConfig = {
  slug: 'VMealsAllergies',
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
      name : 'VMealsAllergiesList',
      type: 'array',
      label: 'VMeals Allergies List',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsAllergiesEnableDisables',
          type: 'text',
          label: 'VMeals AllergiesEnable / Disables',
          admin: {
              readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsAllergiesTitle',
          type: 'text',
          label: 'VMeals Allergies Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealsAllergiesMealTypeName',
            type: 'text',
            label: 'VMeals Allergies Meal Type Name',
            admin: {
                readOnly: false
            },
            required: true
        }
      ]
    }
  ]
};

export default VMealsAllergies;