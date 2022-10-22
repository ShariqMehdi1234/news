import { CollectionConfig } from 'payload/types';

const VMealPortionSize: CollectionConfig = {
  slug: 'VMealPortionSize',
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
      name : 'VMealPortionSizeList',
      type: 'array',
      label: 'VMeal Portion Size List',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealPortionSizeEnableDisables',
          type: 'text',
          label: 'VMeal Portion Size Enable / Disables',
          admin: {
              readOnly: false
          },
          required: true
        },
        {
          name: 'VMealPortionSizeTitle',
          type: 'text',
          label: 'VMeal Portion Size Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealPortionSizeSmallTitle',
            type: 'text',
            label: 'VMeal Portion Size Small Title',
            admin: {
              readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsPortionSizeDeliveriesPerWeekName',
            type: 'text',
            label: 'VMeals Portion Size Deliveries Per Week Name',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsPortionSizeSampleMenuName',
            type: 'text',
            label: 'VMeals Portion Size Sample Menu Name',
            admin: {
                readOnly: false
            },
            required: true
        }
      ]
    }
  ]
};

export default VMealPortionSize;