import { CollectionConfig } from 'payload/types';

const VMealsSeoCategories: CollectionConfig = {
  slug: 'VMealsSeoCategories',
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
      name: 'VMealsSeoCategoriesEnableDisables',
      type: 'text',
      label: 'VMeals Seo Categories Enable / Disables',
      admin: {
          readOnly: false
      },
      required: true
    },
    {
        name: 'VMealsSeoCategoriesTitle',
        type: 'text',
        label: 'VMeals Seo Categories Title',
        admin: {
          readOnly: false
        },
        required: true
    }
  ]
};

export default VMealsSeoCategories;