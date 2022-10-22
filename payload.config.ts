import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import VMealsHeader from './collections/Vmeals/Layout/VMealsHeader';
import VMealsLanguages from './collections/Vmeals/Layout/VMealsLanguages';
import VMealsFooter from './collections/Vmeals/Layout/VMealsFooter';
import VMealsIconFooter from './collections/Vmeals/Layout/VMealsIconFooter';
import VMealsSilderBar from './collections/Vmeals/Home/VMealsSilderBar';
import VMealsCustomersChooseUs from './collections/Vmeals/Home/VMealsCustomersChooseUs';
import VMealsOurGeniuses from './collections/Vmeals/Home/VMealsOurGeniuses';
import VMealsGetStarted from './collections/Vmeals/Home/VMealsGetStarted';
import VMealsGuide from './collections/Vmeals/Home/VMealsGuide';
import VMealsIcon from './collections/Vmeals/Home/VMealsIcon';
import VMealsBlog from './collections/Vmeals/Blog/VMealsBlog';
import VMealBlogCategories from './collections/Vmeals/Blog/VMealBlogCategories';
import VMealsAboutUs from './collections/Vmeals/AboutUs/VMealsAboutUs';
import VMealsContactUs from './collections/Vmeals/ContactUs/VMealsContactUs';
import VMealsFaqs from './collections/Vmeals/Faqs/VMealsFaqs';
import VMealsOurPartners from './collections/Vmeals/OurPartners/VMealsOurPartners';
import VMealsSeo from './collections/Vmeals/Seo/VMealsSeo';
import VMealsSeoCategories from './collections/Vmeals/Seo/VMealsSeoCategories';
import VMealCouponCode from './collections/Vmeals/CouponCode/VMealCouponCode';
import VMealDeliveriesPerWeek from './collections/Vmeals/Plans/VMealDeliveriesPerWeek';
import VMealMealType from './collections/Vmeals/Plans/VMealMealType';
import VMealPortionSize from './collections/Vmeals/Plans/VMealPortionSize';
import VMealsAddOns from './collections/Vmeals/Plans/VMealsAddOns';
import VMealsAllergies from './collections/Vmeals/Plans/VMealsAllergies';
import VMealsCustomisePlan from './collections/Vmeals/Plans/VMealsCustomisePlan';
import VMealsDeliveryInformation from './collections/Vmeals/Plans/VMealsDeliveryInformation';
import VMealsNextHelpBookAppointment from './collections/Vmeals/Plans/VMealsNextHelpBookAppointment';
import VMealsOffDays from './collections/Vmeals/Plans/VMealsOffDays';
import VMealsPaymentSuccessfully from './collections/Vmeals/Plans/VMealsPaymentSuccessfully';
import VMealsPersonalInformation from './collections/Vmeals/Plans/VMealsPersonalInformation';
import VMealsFormEmailAddress from './collections/Vmeals/Form/VMealsFormEmailAddress';
import VMealsFormOrderSummary from './collections/Vmeals/Form/VMealsFormOrderSummary';
import VMealsCalculation from './collections/Vmeals/Calculation/VMealsCalculation';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
    VMealsSilderBar,
    VMealsCustomersChooseUs,
    VMealsOurGeniuses,
    VMealsGetStarted,
    VMealsGuide,
    VMealsIcon,
    VMealsHeader,
    VMealsLanguages,
    VMealsFooter,
    VMealsIconFooter,
    VMealsBlog,
    VMealBlogCategories,
    VMealsAboutUs,
    VMealsContactUs,
    VMealsFaqs,
    VMealsOurPartners,
    VMealsSeo,
    VMealsSeoCategories,
    VMealCouponCode,
    VMealDeliveriesPerWeek,
    VMealMealType,
    VMealPortionSize,
    VMealsAddOns,
    VMealsAllergies,
    VMealsCustomisePlan,
    VMealsDeliveryInformation,
    VMealsNextHelpBookAppointment,
    VMealsOffDays,
    VMealsPaymentSuccessfully,
    VMealsPersonalInformation,
    VMealsFormEmailAddress,
    VMealsFormOrderSummary,
    VMealsCalculation,
  ],
});
