import { CollectionConfig } from 'payload/types';

const VMealsPersonalInformation: CollectionConfig = {
  slug: 'VMealsPersonalInformation',
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
      name: 'VMealsPersonalInformationEnableDisables',
      type: 'text',
      label: 'VMeals Personal Information Enable / Disables',
      admin: {
          readOnly: false
      },
      required: true
    },
    {
        name: 'VMealsPersonalInformationTitle',
        type: 'text',
        label: 'VMeals Personal Information Title',
        admin: {
        readOnly: false
        },
        required: true
    },
    {
        name: 'VMealsPersonalInformationText',
        type: 'text',
        label: 'VMeals Personal Information Text',
        admin: {
        readOnly: false
        },
        required: true
    },
    {
      name : 'VMealsPersonalInformationList',
      type: 'array',
      label: 'VMeals Personal Information List',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsPersonalInformationTitle',
          type: 'text',
          label: 'VMeals Personal Information Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealsPersonalInformationDescription',
            type: 'textarea',
            label: 'VMeals Personal Information Description',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsPersonalInformationauthor',
            type: 'text',
            label: 'VMeals Personal Information Author Text',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
          name: 'VMealsPersonalInformationImageUpload',
          type: 'upload',
          label: 'VMeals Personal Information Image Upload',
          relationTo: 'media',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
            name: 'VMealsPersonalInformationSelectPlanName',
            type: 'text',
            label: 'VMeals Personal Information Select Plan Name',
            admin: {
                readOnly: false
            },
            required: true
        }
      ]
    }
  ]
};

export default VMealsPersonalInformation;