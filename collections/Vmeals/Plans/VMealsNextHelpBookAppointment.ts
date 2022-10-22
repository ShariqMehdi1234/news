import { CollectionConfig } from 'payload/types';

const VMealsNextHelpBookAppointment: CollectionConfig = {
    slug: 'VMealsNextHelpBookAppointment',
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
            name: 'VMealsNextHelpBookAppointmentEnableDisables',
            type: 'text',
            label: 'VMeals Next Help Book Appointment Enable / Disables',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsNextHelpBookAppointmentTitle',
            type: 'text',
            label: 'VMeals Next Help Book Appointment Title',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsNextHelpBookAppointmentDescription',
            type: 'text',
            label: 'VMeals Next Help Book Appointment Description',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsNextHelpBookAppointmentUploadImages',
            type: 'upload',
            label: 'VMeals Next Help Book Appointment Upload Images',
            relationTo: 'media',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsNextHelpBookAppointmentButtonText',
            type: 'text',
            label: 'VMeals Next Help Book Appointment Button Text',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsNextHelpBookAppointmentButtonLinkUrl',
            type: 'text',
            label: 'VMeals Next Help Book Appointment Button Link Url',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsNextHelpBookAppointmentPosition',
            type: 'select',
            label: 'VMeals Next Help Book Appointment Position',
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
        },
        {
            name: 'VMealsNextHelpBookAppointmentSelectPlanName',
            type: 'text',
            label: 'VMeals Next Help Book Appointment Select Plan Name',
            admin: {
                readOnly: false
            },
            required: true
        }
    ]
};

export default VMealsNextHelpBookAppointment;