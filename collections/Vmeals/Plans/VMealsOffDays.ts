import { CollectionConfig } from 'payload/types';

const VMealsOffDays: CollectionConfig = {
  slug: 'VMealsOffDays',
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
      name : 'VMealsOffDaysList',
      type: 'array',
      label: 'VMeals Off Days List',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsOffDaysEnableDisables',
          type: 'text',
          label: 'VMeals Off Days Enable / Disables',
          admin: {
              readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsOffDaysTitle',
          type: 'text',
          label: 'VMeals Off Days Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealsOffDaysDeliveriesPerWeekName',
            type: 'text',
            label: 'VMeals Off Days Deliveries Per Week Name',
            admin: {
                readOnly: false
            },
            required: true
        }
      ]
    }
  ]
};

export default VMealsOffDays;