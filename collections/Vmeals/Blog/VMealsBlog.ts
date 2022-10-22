import { CollectionConfig } from 'payload/types';

const VMealsBlog: CollectionConfig = {
  slug: 'VMealsBlog',
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
      name : 'VMealsBlogList',
      type: 'array',
      label: 'VMealsBlogList',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'VMealsBlogEnableDisables',
          type: 'text',
          label: 'VMeals Blog Enable / Disables',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsBlogTitle',
          type: 'text',
          label: 'VMeals Blog Title',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsBlogTags',
          type: 'text',
          label: 'VMeals Blog Tags',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsBlogDescription',
          type: 'textarea',
          label: 'VMeals Blog Description',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsBlogTitleTwo',
          type: 'text',
          label: 'VMeals Blog Title Two',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsBlogDescriptionTwo',
          type: 'textarea',
          label: 'VMeals Blog Description Two',
          admin: {
            readOnly: false
          },
          required: true
        },
        {
          name: 'VMealsBlogCategoriesName',
          type: 'text',
          label: 'VMeals Blog Categories Name',
          admin: {
            readOnly: false
          },
          required: true
        }
      ]
    }
  ]
};

export default VMealsBlog;