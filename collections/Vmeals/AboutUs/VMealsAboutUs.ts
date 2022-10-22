import { CollectionConfig } from 'payload/types';

const VMealsAboutUs: CollectionConfig = {
  slug: 'VMealsAboutUs',
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
      name: 'VMealsAboutUsEnableDisables',
      type: 'text',
      label: 'VMeals AboutUs Enable / Disables',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
      name: 'VMealsAboutUsTitle',
      type: 'text',
      label: 'VMeals AboutUs Title',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
      name: 'VMealsAboutUsDescription',
      type: 'textarea',
      label: 'VMeals AboutUs Description',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
      name : 'VMealsAboutUsList',
      type: 'array',
      label: 'VMeals AboutUs List',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsAboutUsTitleItem',
          type: 'text',
          label: 'VMeals About Us Title Item',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsAboutUsDescriptionItem',
          type: 'textarea',
          label: 'VMeals About Us Description Item',
          admin: {
            readOnly: false
          },
          required: true
        }
      ]
    }
  ]
};

export default VMealsAboutUs;