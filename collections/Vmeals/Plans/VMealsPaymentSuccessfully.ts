import { CollectionConfig } from 'payload/types';

const VMealsPaymentSuccessfully: CollectionConfig = {
  slug: 'VMealsPaymentSuccessfully',
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
        name: 'VMealsPaymentSuccessfullyUploadImage',
        type: 'upload',
        label: 'VMeals Payment Successfully Upload Image',
        relationTo: 'media',
        admin: {
          readOnly: false
        },
        required: true
    },
    {
      name: 'VMealsPaymentSuccessfullyTitle',
      type: 'text',
      label: 'VMeals Payment Successfully Title',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
        name: 'VMealsPaymentSuccessfullyText',
        type: 'text',
        label: 'VMeals Payment Successfully Text',
        admin: {
          readOnly: false
        },
        required: true
    },
    {
      name : 'VMealsPaymentSuccessfullyList',
      type: 'array',
      label: 'VMeals Payment Successfully List',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsPaymentSuccessfullyEnableDisables',
          type: 'text',
          label: 'VMeals Payment Successfully Enable / Disables',
          admin: {
              readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsPaymentSuccessfullyTitle',
          type: 'text',
          label: 'VMeals Payment Successfully Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealsPaymentSuccessfullyDescription',
            type: 'textarea',
            label: 'VMeals Payment Successfully Description',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsPaymentSuccessfullyauthor',
            type: 'text',
            label: 'VMeals Payment Successfully Author Text',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
          name: 'VMealsPaymentSuccessfullyImageUpload',
          type: 'upload',
          label: 'VMeals Payment Successfully Image Upload',
          relationTo: 'media',
          admin: {
            readOnly: false
          },
          required: true
        }
      ]
    }
  ]
};

export default VMealsPaymentSuccessfully;