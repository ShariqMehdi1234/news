import { CollectionConfig } from 'payload/types';

const VMealsCustomisePlan: CollectionConfig = {
  slug: 'VMealsCustomisePlan',
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
      name : 'VMealsCustomisePlanSelectPlan',
      type: 'array',
      label: 'VMeals Customise Plan SelectPlan',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsCustomisePlanEnableDisables',
          type: 'text',
          label: 'VMeals Customise Plan Enable / Disables',
          admin: {
              readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsCustomisePlanTitle',
          type: 'text',
          label: 'VMeals Customise Plan Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealsCustomisePlanDescription',
            type: 'textarea',
            label: 'VMeals Customise Plan Description',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsCustomisePlanSampleMenuName',
            type: 'text',
            label: 'VMeals Customise Plan Sample Menu Name',
            admin: {
                readOnly: false
            },
            required: true
        }
      ]
    }
  ]
};

export default VMealsCustomisePlan;