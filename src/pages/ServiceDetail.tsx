import { useLocation, useParams } from "react-router-dom";
import { servicesData } from "@/data/services";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Check } from "lucide-react";
import ServiceAccordion from "@/components/ServiceAccordion";
import ServiceSidebar from "@/components/ServiceSidebar";

import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";

import TaskAltIcon from '@mui/icons-material/TaskAlt';

// Icons
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AnchorOutlinedIcon from "@mui/icons-material/AnchorOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();

  const service = servicesData.find(s => s.slug === slug);

  if (!service) return null;

  const contentRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  
  useEffect(() => {
    if (location.state?.fromSidebar && contentRef.current) {
      const elementTop =
        contentRef.current.getBoundingClientRect().top + window.pageYOffset;

      const offset = 50; // adjust to your navbar height

      window.scrollTo({
        top: elementTop - offset,
        behavior: "smooth",
      });
    }
  }, [slug]);

  const iconMap: any = {
    inventory: <Inventory2OutlinedIcon />,
    anchor: <AnchorOutlinedIcon />,
    car: <DirectionsCarOutlinedIcon />,
    security: <SecurityOutlinedIcon />,
    cube: <ViewInArOutlinedIcon />,
    crown: <WorkspacePremiumOutlinedIcon />,
  };

  const slides = [
    {
      type: "video",
      src: "/service-video.mp4",
      title: "Seamless Shipping Across Land, Sea & Sky",
      subtitle:
        "Secure, scalable, and technology-driven warehouse solutions for global logistics.",
    },
    {
      type: "video",
      src: "/service-video.mp4",
      title: "Reliable Transport & Logistics Services",
      subtitle:
        "Professional service with proven results.",
    },
    {
      type: "video",
      src: "/service-video.mp4",
      title: "Solutions That Drive Results",
      subtitle:
        "Smart solutions for modern businesses.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>

      {/* Hero Section with Background Video */}
      <section className="relative h-[30vh] md:h-[50vh] lg:h-[80vh] flex items-center">

        {/* Slides */}
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {slide.type === "video" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={slide.src}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Content */}
        <div className="relative z-10 px-6 w-[85%] mx-auto">

          <motion.div
            key={current + "-content"}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-[60%]"
          >

            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight whitespace-pre-line text-white mb-4">
              {slides[current].title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/80 mb-8">
              {slides[current].subtitle}
            </p>

            {/* Buttons */}
            <div className="flex gap-4">

              <Link
                to="/contact"
                className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Get Started
              </Link>

              <Link
                to="/about"
                className="border border-white/40 bg-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition"
              >
                Learn More
              </Link>

            </div>

          </motion.div>

        </div>

        {/* Dots */}
        {/* <div className="absolute bottom-8 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-primary" : "bg-white/40"
              }`}
            />
          ))}
        </div> */}

      </section>

      {/* SERVICE DETAIL CONTENT */}
      <section className="pt-20 pb-20 bg-white" ref={contentRef}>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10 items-start">

          {/* RIGHT GALLERY */}
          <div className="lg:col-span-1 h-full relative">

            <div className="sticky top-24">
              <ServiceSidebar />
            </div>

          </div>

          {/* LEFT MAIN */}
          <div className="lg:col-span-2">

            {/* TITLE */}
            <h2 className="text-[35px] leading-10 font-bold mb-5">
              {service.title}
            </h2>

            {/* TEXT */}
            <p
              className="text-gray-500 text-base leading-6 mb-6"
              dangerouslySetInnerHTML={{ __html: service.introText }}
            />

            <p
              className="text-gray-500 text-base leading-6 mb-6"
              dangerouslySetInnerHTML={{ __html: service.introText1 }}
            />

            {service.gallery && (
              <div className="grid md:grid-cols-2 gap-6 mt-7">
                {service.gallery.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            )}

            <div className="mt-7 mb-10">
              <h3 className="text-xl text-gray-600 font-bold mb-6">
                Key Benefits
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        
                {service.benefits?.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#f5f7fa] rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-5 mb-2">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-3 ${item.bg} ${item.color}`}
                      >
                        {iconMap[item.icon]}
                      </div>
        
                      {/* Title */}
                      <h3 className="text-base font-semibold text-gray-800 mb-3">
                        {item.title}
                      </h3>
                    </div>
        
                    {/* Description */}
                    <p className="text-gray-500 leading-relaxed text-base">
                      {item.desc}
                    </p>
        
                  </motion.div>
                ))}
        
              </div>
            </div>

            <div className="mt-10">
              {/* FEATURES */}
              <h3 className="text-xl text-gray-600 font-bold mb-4">
                What's Included
              </h3>

              <ul className="space-y-5 mb-8">
                {service.features.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <TaskAltIcon className="!w-5 !h-5 text-primary mt-1 shrink-0" />

                    {typeof item === "string" ? (
                      <span>{item}</span>
                    ) : (
                      <span>
                        <span className="font-semibold text-gray-600">{item.title}</span> – <span className="text-gray-500 text-base leading-6">{item.description}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* FEATURES */}
              <h3 className="text-xl text-gray-600 font-bold mb-4">
                {service.highlightsTitle}
              </h3>

              <ul className="space-y-4 mb-8">
                {service.highlights.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />

                    <span className="text-gray-500 text-base leading-6"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* HIGHLIGHTS */}
            {/* <h3 className="text-xl font-bold text-gray-600 mb-4">
              Facility Highlights
            </h3>

            <ul className="space-y-3 mb-8">
              {service.highlights.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="text-gray-500 text-base leading-6">{item}</span>
                </li>
              ))}
            </ul> */}

            <div className="mt-10">
              <h3 className="text-xl text-gray-600 font-bold mb-4">
                Frequently Asked Questions (FAQ)
              </h3>
              <ServiceAccordion items={service.accordion} />
            </div>
          </div>

        </div>

      </section>

    </>
  );
}