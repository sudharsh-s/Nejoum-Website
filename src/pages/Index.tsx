import { useTranslation } from 'react-i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EastIcon from '@mui/icons-material/East';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BoltIcon from "@mui/icons-material/Bolt";
import PublicIcon from "@mui/icons-material/Public";


import StatsSection from "@/components/StatsSection";
import AboutStatsSection from "@/components/AboutStatsSection";
import AwardsSection from "@/components/AwardsSection";
import MissionSection from "@/components/MissionSection";
import ServicesSlider from "@/components/ServicesSlider";
import BrandSlider from "@/components/BrandSlider";
import RequestQuote from "@/components/RequestQuote";
import TestimonialSection from "@/components/TestimonialSection";


import heroImg from '@/assets/bg-home.webp';

const Index = () => {

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0b1f2a]">
  
        {/* Background Image Right Side */}
        <div className="absolute inset-0 flex">
          <div className="hidden lg:block w-full relative">
            <img
              src={heroImg}
              alt="Logistics"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-20 -mt-40">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Smart Logistics <br />
              Seamless Growth
            </h1>

            <div className="flex items-center gap-6 mb-8 text-white/70 text-sm">
              <span className='flex items-center gap-2'>
                <span className="w-[20px] h-[20px] flex text-center justify-center items-center backdrop-blur-md bg-white/25 rounded-[4px]"><BoltIcon className='!text-xs' /> </span>
                Your Growth, Our Logistics
              </span>
              <span className='flex items-center gap-2'> 
                <span className="w-[20px] h-[20px] flex text-center justify-center items-center backdrop-blur-md bg-white/25 rounded-[4px]"><PublicIcon className='!text-xs' /> </span> 
                Nationwide Reach, Local Care
              </span>
            </div>

            <div className="flex gap-4">
              <Link
                to="/contact"
                className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
              >
                Get a Free Quote
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: "tween", duration: 0.3 }}
                  // Make sure the hover is detected on the arrow only
                >
                  <EastIcon />
                </motion.span>
              </Link>

              <Link
                to="/services"
                className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Running Text */}
        <div className="absolute bottom-6 left-0 w-full overflow-hidden marquee_home_sec">
          <div className="marquee_home">
            <h2 className="text-[120px] md:text-[90px] font-extrabold text-white/50 whitespace-nowrap">
              NEJOUM AL JAZEERA NEJOUM AL JAZEERA NEJOUM AL JAZEERA NEJOUM AL JAZEERA
            </h2>
          </div>
        </div>
      </section>

      <div>
        <StatsSection />
      </div>

      <AboutStatsSection />

      <MissionSection />

      <ServicesSlider />

      <BrandSlider />

      <AwardsSection />

      <RequestQuote />

      <TestimonialSection />


    </div>
  );
};

export default Index;
