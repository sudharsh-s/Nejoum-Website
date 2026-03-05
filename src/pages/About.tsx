import { useTranslation } from 'react-i18next';
import AboutPageHeader from '@/components/AboutPageHeader';
import AboutSection from '@/components/AboutSection';
import RunningText from '@/components/RunningText';
import LocationSection from '@/components/LocationSection';
import FaqSection from '@/components/FaqSection';
import ProcessSection from "@/components/ProcessSection";
import StickyStatsSection from "@/components/StickyStatsSection";


const About = () => {


  return (
    <div>

      <AboutPageHeader />

      <AboutSection />

      <RunningText />

      {/* <LocationSection /> */}

      {/* <ProcessSection /> */}

      <StickyStatsSection />

      <FaqSection />


    </div>
  );
};

export default About;
