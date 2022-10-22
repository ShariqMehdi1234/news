import { CollectionConfig } from 'payload/types';

const VMealsOurGeniuses: CollectionConfig = {
    slug: 'VMealsOurGeniuses',
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
            name: 'VMealsOurGeniusesEnableDisables',
            type: 'text',
            label: 'VMeals Our Geniuses Enable / Disables',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsOurGeniusesTitle',
            label: 'VMeals Our Geniuses Title',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsOurGeniusesHeading',
            label: 'VMeals Our Geniuses Heading',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsOurGeniusesDescription',
            label: 'VMeals Our Geniuses Description',
            type: 'textarea',
            admin: {
                readOnly: false,
            },
            required: true,
        },
        {
            name: 'VMealsOurGeniusesButtonBookAppointment',
            label: 'VMeals Our Geniuses Button Book Appointment',
            type: 'text',
            admin: {
                readOnly: false,
            },
            required: true,
        },
    ]
};

export default VMealsOurGeniuses;