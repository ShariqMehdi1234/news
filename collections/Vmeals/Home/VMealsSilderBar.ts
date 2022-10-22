import { CollectionConfig } from 'payload/types';

const VMealsSilderBar: CollectionConfig = {
    slug: 'VMealsSilderBar',
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
            name: 'VMealsSilderBarEnableDisables',
            type: 'text',
            label: 'VMeals Silder Bar Enable / Disables',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsSilderBarTitle',
            label: 'VMeals Silder Bar Title',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsSilderBarDescription',
            label: 'VMeals Silder Bar Description',
            type: 'textarea',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsSilderBarUpload',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'VMealsSilderBarButtonViewPlan',
            label: 'VMeals Silder Bar Button View Plan',
            type: 'text',
            required: true,
        },
        {
            name: 'VMealsSilderBarUploadButtonLearnMore',
            label: 'VMeals Silder Bar Button Learn More',
            type: 'text',
            required: true,
        }
    ]
};

export default VMealsSilderBar;