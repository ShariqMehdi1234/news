import { CollectionConfig } from 'payload/types';

const VMealsPlanDuration: CollectionConfig = {
  slug: 'VMealsPlanDuration',
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
      name : 'VMealsPlanDurationList',
      type: 'array',
      label: 'VMeals Plan Duration List',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsPlanDurationEnableDisables',
          type: 'text',
          label: 'VMeals Plan Duration Enable / Disables',
          admin: {
              readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsPlanDurationTitle',
          type: 'text',
          label: 'VMeals Off Days Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealsPlanDurationSelectPlanName',
            type: 'text',
            label: 'VMeals Plan Duration Select Plan Name',
            admin: {
                readOnly: false
            },
            required: true
        }
      ]
    }
  ]
};

export default VMealsPlanDuration;