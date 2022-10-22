import { CollectionConfig } from 'payload/types';

const VMealsSelectPlan: CollectionConfig = {
  slug: 'VMealsSelectPlan',
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
      name : 'VMealsSelectPlanList',
      type: 'array',
      label: 'VMeals Select Plan List',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsSelectPlanEnableDisables',
          type: 'text',
          label: 'VMeals Select Plan Enable / Disables',
          admin: {
              readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsSelectPlanTitle',
          type: 'text',
          label: 'VMeals Select Plan Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsSelectPlanImageUpload',
          type: 'upload',
          label: 'VMeals Select Plan Image Upload',
          relationTo: 'media',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsSelectPlanLinkUrl',
          type: 'text',
          label: 'VMeals Select Plan Link Url',
          admin: {
            readOnly: false
          },
          required: true
        }
      ]
    }
  ]
};

export default VMealsSelectPlan;