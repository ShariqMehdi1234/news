import { CollectionConfig } from 'payload/types';

const VMealsFormOrderSummary: CollectionConfig = {
    slug: 'VMealsFormOrderSummary',
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
            name: 'VMealsFormOrderSummaryPlanName',
            type: 'text',
            label: 'VMeals Plan Information Form Order Summary Plan Name',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryDietType',
            type: 'text',
            label: 'VMeals Plan Information Form Order Summary Diet Type',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryPortionSize',
            type: 'text',
            label: 'VMeals Plan Information Form Order Summary Portion Size',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryDeliversiesPerWeek',
            type: 'text',
            label: 'VMeals Plan Information Form Order Summary Deliversies Per Week',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryOffDay',
            type: 'text',
            label: 'VMeals Plan Information Form Order Summary Off Day(s)',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryPlanDuration',
            type: 'text',
            label: 'VMeals Plan Information Form Order Summary Plan Duration',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryMealType',
            type: 'text',
            label: 'VMeals Plan Information Form Order Summary Meal Type',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryAllergies',
            type: 'text',
            label: 'VMeals Plan Information Form Order Summary Allergies',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryAddOn',
            type: 'text',
            label: 'VMeals Plan Information Form Order Summary Add On',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryPersonalInformationFirstName',
            type: 'text',
            label: 'VMeals Personal Information First Name',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryPersonalInformationLastName',
            type: 'text',
            label: 'VMeals Personal Information Last Name',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryPersonalInformationEmailAddress',
            type: 'email',
            label: 'VMeals Personal Information Email Address',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryPersonalInformationMobileNumber',
            type: 'number',
            label: 'VMeals Personal Information Mobile Number',
            admin: {
                readOnly: false,
                step: 1
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryPersonalInformationDateofBirth',
            type: 'date',
            label: 'VMeals Personal Information Date of Birth',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryPersonalInformationNationality',
            type: 'text',
            label: 'VMeals Personal Information Nationality',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryDeliveryInformationStartingDate',
            type: 'date',
            label: 'VMeals Delivery Information Starting Date',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryDeliveryInformationCity',
            type: 'text',
            label: 'VMeals Delivery Information City',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryDeliveryInformationAddress',
            type: 'text',
            label: 'VMeals Delivery Information Address',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryDeliveryInformationApartmentVillaNumber',
            type: 'text',
            label: 'VMeals Delivery Information Apartment Villa Number',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryDeliveryInformationAccessCode',
            type: 'text',
            label: 'VMeals Delivery Information Access Code',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryDeliveryInformationDeliverySlot',
            type: 'text',
            label: 'VMeals Delivery Information Delivery Slot',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryDeliveryInformationGoogleMapsLink',
            type: 'text',
            label: 'VMeals Delivery Information Google Maps Link',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryDeliveryInformationDeliveryInstructions',
            type: 'text',
            label: 'VMeals Delivery Information Delivery Instructions',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryTolalCurrentName',
            type: 'text',
            label: 'VMeals Form Order Summary Current Name',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsFormOrderSummaryTolalAmount',
            type: 'number',
            label: 'VMeals Form Order Summary Tolal Amount',
            admin: {
                readOnly: false
            },
            required: true
        }
    ]
};

export default VMealsFormOrderSummary;