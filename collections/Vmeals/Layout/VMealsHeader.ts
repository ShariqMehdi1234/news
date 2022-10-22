import { CollectionConfig } from 'payload/types';

const VMealsHeader: CollectionConfig = {
    slug: 'VMealsHeader',
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
            name: 'VMealsHeaderEnableDisables',
            type: 'text',
            label: 'VMeals Header Enable / Disables',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsHeaderLogoImage',
            label: 'VMeals Header Logo Image',
            type: 'upload',
            relationTo: 'media',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsHeaderButtonText',
            label: 'VMeals Header Button Text',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsHeaderMenuList',
            type: 'array',
            label: 'VMeals Header Menu List',
            minRows: 1,
            maxRows: 5,
            labels: {
              singular: 'Slide',
              plural: 'Slides',
            },
            fields: [
                {
                    name: 'VMealsHeaderMenuItemTitle',
                    label: 'VMeals Header Menu Item Title',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: true,
                },
                {
                    name: 'VMealsFooterMenuItemLinkURL',
                    label: 'VMeals Footer Menu Item Link URL',
                    type: 'text',
                    admin: {
                        readOnly: false,
                    },
                    required: true,
                },
                {
                    name: 'VMealsHeaderSubMenuList',
                    type: 'array',
                    label: 'VMeals Header Sub Menu List',
                    minRows: 1,
                    maxRows: 5,
                    labels: {
                      singular: 'Slide',
                      plural: 'Slides',
                    },
                    fields: [
                        {
                            name: 'VMealsHeaderSubMenuItemTitle',
                            label: 'VMeals Header Sub Menu Item Title',
                            type: 'text',
                            admin: {
                                readOnly: false,
                            },
                            required: true,
                        },
                        {
                            name: 'VMealsFooterSubMenuItemLinkURL',
                            label: 'VMeals Footer Sub Menu Item Link URL',
                            type: 'text',
                            admin: {
                                readOnly: false,
                            },
                            required: true,
                        }
                    ]
                }
            ]
        }
    ]
};

export default VMealsHeader;