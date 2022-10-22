import { CollectionConfig } from 'payload/types';

const VMealsOurPartners: CollectionConfig = {
  slug: 'VMealsOurPartners',
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
        name: 'VMealsOurPartnersEnableDisables',
        type: 'text',
        label: 'VMeals Our Partners Enable / Disables',
        admin: {
            readOnly: false
        },
        required: true
    },
    {
      name: 'VMealsOurPartnersTitle',
      type: 'text',
      label: 'VMeals Our Partners Title',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
      name : 'VMealsOurPartnersList',
      type: 'array',
      label: 'VMeals Our Partners List',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsOurPartnersImageUpload',
          type: 'upload',
          label: 'VMeals Our Partners Image Upload',
          relationTo: 'media',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsOurPartnersDescription',
          type: 'textarea',
          label: 'VMeals Our Partners Description',
          admin: {
            readOnly: false
          },
          required: true
        }
      ]
    }
  ]
};

export default VMealsOurPartners;