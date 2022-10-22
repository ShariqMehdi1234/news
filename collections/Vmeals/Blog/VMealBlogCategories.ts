import { CollectionConfig } from 'payload/types';

const VMealBlogCategories: CollectionConfig = {
  slug: 'VMealBlogCategories',
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
      name: 'VMealBlogCategoriesEnableDisables',
      type: 'text',
      label: 'VMeal Blog Categories Enable / Disables',
      admin: {
        readOnly: false
      },
      required: true
    },
    {
        name: 'VMealBlogCategoriesTitle',
        type: 'text',
        label: 'VMeals Blog Categories Title',
        admin: {
            readOnly: false
        },
        required: true
    },
  ]
};

export default VMealBlogCategories;