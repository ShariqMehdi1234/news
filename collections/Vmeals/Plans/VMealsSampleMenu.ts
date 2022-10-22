import { CollectionConfig } from 'payload/types';

const VMealsSampleMenu: CollectionConfig = {
  slug: 'VMealsSampleMenu',
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
      name : 'VMealsSampleMenuSelectPlan',
      type: 'array',
      label: 'VMeals Sample Menu SelectPlan',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsSampleMenuEnableDisables',
          type: 'text',
          label: 'VMeals Sample Menu Enable / Disables',
          admin: {
              readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsSampleMenuTitle',
          type: 'text',
          label: 'VMeals Sample Menu Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealsSampleMenuTags',
            type: 'text',
            label: 'VMeals Sample Menu Tags',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsSampleMenuDescription',
            type: 'textarea',
            label: 'VMeals Sample Menu Description',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsSampleMenuSelectPlanName',
            type: 'text',
            label: 'VMeals Sample Menu Select Plan Name',
            admin: {
                readOnly: false
            },
            required: true
        }
      ]
    }
  ]
};

export default VMealsSampleMenu;