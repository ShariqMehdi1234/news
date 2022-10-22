import { CollectionConfig } from 'payload/types';

const VMealDeliveriesPerWeek: CollectionConfig = {
  slug: 'VMealDeliveriesPerWeek',
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
      name : 'VMealDeliveriesPerWeekList',
      type: 'array',
      label: 'VMeal Deliveries Per Week List',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealDeliveriesPerWeekEnableDisables',
          type: 'text',
          label: 'VMeal Deliveries Per Week Enable / Disables',
          admin: {
              readOnly: false
          },
          required: true
        },
        {
          name: 'VMealDeliveriesPerWeekTitle',
          type: 'text',
          label: 'VMeal Deliveries Per Week Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealsDeliveriesPerWeekPortionSizeName',
            type: 'text',
            label: 'VMeals Deliveries Per Week Portion Size Name',
            admin: {
                readOnly: false
            },
            required: true
        }
      ]
    }
  ]
};

export default VMealDeliveriesPerWeek;