import { useTranslation } from 'react-i18next';
import AboutPageHeader from '@/components/AboutPageHeader';
import AboutSection from '@/components/AboutSection';
import RunningText from '@/components/RunningText';
import LocationSection from '@/components/LocationSection';
import FaqSection from '@/components/FaqSection';
import AwardsSection from "@/components/AwardsSection";


const About = () => {


  return (
    <div>

      <AboutPageHeader />

      <AboutSection />

      <RunningText />

      <AwardsSection />

      {/* <LocationSection /> */}

      <FaqSection />


    </div>
  );
};

export default About;
