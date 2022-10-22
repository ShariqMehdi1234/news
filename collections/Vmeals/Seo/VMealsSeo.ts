import { CollectionConfig } from 'payload/types';

const VMealsSeo: CollectionConfig = {
  slug: 'VMealsSeo',
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
      name : 'VMealsSeoList',
      type: 'array',
      label: 'VMealsSeoList',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsSeoEnableDisables',
          type: 'text',
          label: 'VMeals Seo Enable / Disables',
          admin: {
              readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsSeoCategoriesName',
          type: 'text',
          label: 'VMeals Seo Categories Name',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsSeoTitle',
          type: 'text',
          label: 'VMeals Seo Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsSeoDescription',
          type: 'textarea',
          label: 'VMeals Seo Description',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsSeoTitleTwo',
          type: 'text',
          label: 'VMeals Seo Title Two',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsSeoDescriptionTwo',
          type: 'textarea',
          label: 'VMeals Seo Description Two',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsSeoUploadFile',
          type: 'upload',
          label: 'VMeals Seo Upload File',
          relationTo: 'media',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsSeoColor',
          type: 'text',
          label: 'VMeals Seo Color',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsSeoUploadButtonText',
          type: 'text',
          label: 'VMeals Seo Upload Button Text',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsSeoSelectPositionText',
          type: 'select',
          label: 'VMeals Seo Select Position Text',
          required: true,
          options: [
            {
              label: 'Left',
              value: 'left',
            },
            {
              label: 'Right',
              value: 'right',
            }
          ]
        }
      ]
    }
  ]
};

export default VMealsSeo;