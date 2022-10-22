import { CollectionConfig } from 'payload/types';

const VMealsCalculation: CollectionConfig = {
  slug: 'VMealsCalculation',
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
            name: 'VMealsCalculationEnableDisables',
            type: 'text',
            label: 'VMeals Calculation Enable / Disables',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsCalculationNumber',
            type: 'number',
            label: 'VMeals Calculation Amount',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsCalculationTax',
            type: 'number',
            label: 'VMeals Calculation Tax',
            admin: {
                readOnly: false
            },
            required: true
        },
        {
            name: 'VMealsCalculationDiscount',
            type: 'number',
            label: 'VMeals Calculation Discount',
            admin: {
                readOnly: false
            },
            required: true
        }
    ]
};

export default VMealsCalculation;