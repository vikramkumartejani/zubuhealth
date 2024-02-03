import Hero from './components/Hero'
import OurFeatures from './components/OurFeatures'
import Footer from './components/Footer'
import KeyBenefits from './components/KeyBenefits';
import Testimonials from './components/Testimonials';
import OurPricing from './components/OurPricing';
import Skyrocket from './components/Skyrocket/Skyrocket';
import CRM from './components/CRM';


export default function Home() {
  return (
    <>
      <Hero/>
      <OurFeatures/>
      <KeyBenefits/>
      <Testimonials/>
      <OurPricing/>
      <Skyrocket/>
      <CRM/>
      <Footer/>
    </>
  );
}
