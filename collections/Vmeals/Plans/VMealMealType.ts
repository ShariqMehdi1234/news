import { CollectionConfig } from 'payload/types';

const VMealMealType: CollectionConfig = {
  slug: 'VMealMealType',
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
      name : 'VMealMealTypeList',
      type: 'array',
      label: 'VMeal Meal Type List',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealMealTypeEnableDisables',
          type: 'text',
          label: 'VMeal Meal Type Enable / Disables',
          admin: {
              readOnly: false
          },
          required: true
        },
        {
          name: 'VMealMealTypeTitle',
          type: 'text',
          label: 'VMeal Meal Type Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealMealTypePlanDurationName',
            type: 'text',
            label: 'VMeal Meal Type Plan Duration Name',
            admin: {
                readOnly: false
            },
            required: true
        }
      ]
    }
  ]
};

export default VMealMealType;