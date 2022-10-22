import { CollectionConfig } from 'payload/types';

const VMealsContactUs: CollectionConfig = {
  slug: 'VMealsContactUs',
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
      name: 'VMealsContactUsEnableDisables',
      type: 'text',
      label: 'VMeals Contact Us Enable / Disables',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
      name: 'VMealsContactUsTitle',
      type: 'text',
      label: 'VMeals Contact Us Title',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
        name: 'VMealsContactUsText',
        type: 'text',
        label: 'VMeals Contact Us Text',
        admin: {
            readOnly: false
        },
        required: true
    },
    {
        name: 'VMealsContactUsButtonText',
        type: 'text',
        label: 'VMeals Contact Us Text',
        admin: {
            readOnly: false
        },
        required: true
    },
    {
        name: 'VMealsContactUsButtonImagesIcon',
        type: 'upload',
        label: 'VMeals Contact Us Images Icon Text',
        relationTo: 'media',
        admin: {
            readOnly: false
        },
        required: true
    },
    {
        name: 'VMealsContactUsButtonLinkUrl',
        type: 'text',
        label: 'VMeals Contact Us Button Link Url',
        admin: {
            readOnly: false
        },
        required: true
    },
    {
        name: 'VMealsContactUsButtonTextTwo',
        type: 'text',
        label: 'VMeals Contact Us Button Text Two',
        admin: {
            readOnly: false
        },
        required: true
    },
    {
        name: 'VMealsContactUsButtonImagesIconTwo',
        type: 'upload',
        label: 'VMeals Contact Us Button Images Icon Two',
        relationTo: 'media',
        admin: {
            readOnly: false
        },
        required: true
    },
    {
        name: 'VMealsContactUsButtonLinkUrl',
        type: 'text',
        label: 'VMeals Contact Us Button Link Url Two',
        admin: {
            readOnly: false
        },
        required: true
    },
    {
      name : 'VMealsContactUsList',
      type: 'array',
      label: 'VMeals Contact Us List',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsContactUsImageIconUpload',
          type: 'upload',
          label: 'VMeals Contact Us Image Icon Upload',
          relationTo: 'media',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsContactUsTitle',
          type: 'text',
          label: 'VMeals Contact Us Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealsContactUsLinkUrl',
            type: 'text',
            label: 'VMeals Contact Us Link Url',
            admin: {
              readOnly: false
            },
            required: true
        },
      ]
    }
  ]
};

export default VMealsContactUs;