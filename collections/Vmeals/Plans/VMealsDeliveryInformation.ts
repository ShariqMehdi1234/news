import { CollectionConfig } from 'payload/types';

const VMealsDeliveryInformation: CollectionConfig = {
  slug: 'VMealsDeliveryInformation',
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
        name: 'VMealsDeliveryInformationTitle',
        type: 'text',
        label: 'VMeals Delivery Information Title',
        admin: {
        readOnly: false
        },
        required: true
    },
    {
        name: 'VMealsDeliveryInformationText',
        type: 'text',
        label: 'VMeals Delivery Information Text',
        admin: {
        readOnly: false
        },
        required: true
    },
    {
      name : 'VMealsDeliveryInformationList',
      type: 'array',
      label: 'VMeals Delivery Information List',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsDeliveryInformationEnableDisables',
          type: 'text',
          label: 'VMeals Delivery Information Enable / Disables',
          admin: {
              readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsDeliveryInformationTitle',
          type: 'text',
          label: 'VMeals Delivery Information Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealsDeliveryInformationDescription',
            type: 'textarea',
            label: 'VMeals Delivery Information Description',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsDeliveryInformationauthor',
            type: 'text',
            label: 'VMeals Delivery Information Author Text',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
          name: 'VMealsDeliveryInformationImageUpload',
          type: 'upload',
          label: 'VMeals Delivery Information Image Upload',
          relationTo: 'media',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealsDeliveryInformationSelectPlanName',
            type: 'text',
            label: 'VMeals Delivery Information Select Plan Name',
            admin: {
                readOnly: false
            },
            required: true
        }
      ]
    }
  ]
};

export default VMealsDeliveryInformation;