import { CollectionConfig } from 'payload/types';

const VMealsFaqs: CollectionConfig = {
  slug: 'VMealsFaqs',
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
      name: 'VMealsFaqsTitle',
      type: 'text',
      label: 'VMeals Faqs Title',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
        name: 'VMealsFaqsImagesUpload',
        type: 'upload',
        label: 'VMeals Faqs Images Upload',
        relationTo: 'media',
        admin: {
          readOnly: false
        },
        required: true
    },
    {
      name: 'VMealsFaqsEnableDisables',
      type: 'text',
      label: 'VMeals Faqs Enable / Disables',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
      name : 'VMealsFaqsList',
      type: 'array',
      label: 'VMeals Faqs List',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsFaqsText',
          type: 'text',
          label: 'VMeals Faqs Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name : 'VMealsFaqsItemList',
            type: 'array',
            label: 'VMeals Faqs Item List',
            minRows: 1,
            maxRows: 5,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsFaqsItemTitle',
                    type: 'text',
                    label: 'VMeals Faqs Item Title',
                    admin: {
                    readOnly: false
                    },
                    required: true
                },
                {
                    name: 'VMealsFaqsItemDescription',
                    type: 'textarea',
                    label: 'VMeals Faqs Item Description',
                    admin: {
                    readOnly: false
                    },
                    required: true
                },
            ]
        }
      ]
    }
  ]
};

export default VMealsFaqs;