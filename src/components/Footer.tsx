import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import foooterBg from "@/assets/footer_bg.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative text-white pt-10 md:pt-24 pb-5 md:pb-10">

      <img src={foooterBg} alt="" className="absolute top-0 w-full h-full object-cover" />

      <div className="bg-[#011533] w-full h-full absolute top-0 opacity-70"></div>

      <div className="max-w-7xl mx-auto">

        {/* Glass Container */}
        <div className="bg-[#032d6b] backdrop-blur-2xl rounded-3xl md:rounded-[40px] p-7 md:p-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-5 md:pb-0">

            {/* Logo Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className='flex items-center mb-6'> 
                  <img src="/logo-icon.png" alt="Nejoum Shipping" className="h-10 md:h-12 w-auto object-contain" /> 
                  <img src="/logo-name.png" alt="Nejoum Shipping" className="h-10 md:h-12 w-auto object-contain invert brightness-0" /> 
                </div>
              </div>

              <p className="text-white/60 mb-6 leading-relaxed">
                Our dedication lies in embracing challenges and pioneering innovation within the more attractive advertising sector.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  {
                    Icon: FacebookIcon,
                    link: "https://www.facebook.com/nejoumaljazeera",
                  },
                  {
                    Icon: InstagramIcon,
                    link: "https://www.instagram.com/nejoumaljazeera",
                  },
                  {
                    Icon: XIcon,
                    link: "https://x.com/Nejoumae",
                  },
                  {
                    Icon: LinkedInIcon,
                    link: "https://www.linkedin.com/company/nejoum-aljazeer/",
                  },
                ].map(({ Icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all duration-300 cursor-pointer"
                  >
                    <Icon fontSize="small" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                Quick Links
                <span className="block w-10 h-[2px] bg-secondary mt-2"></span>
              </h4>

              <ul className="space-y-2 md:space-y-3 text-white/80 md:text-white/60">
                {[
                  { label: "Home", path: "/" },
                  { label: "About Us", path: "/about" },
                  { label: "Our Services", path: "/services/auction-account-services" },
                  { label: "Contact Us", path: "/contact" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.path}
                      className="hover:text-white transition text-sm md:text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                Our Services
                <span className="block w-10 h-[2px] bg-secondary mt-2"></span>
              </h4>

              <ul className="space-y-2 md:space-y-3 text-white/80 md:text-white/60">
                {[
                  { label: "Auction Account Services", path: "/services/auction-account-services" },
                  { label: "Towing Services", path: "/services/towing-services" },
                  { label: "Loading Services", path: "/services/loading-services" },
                  { label: "Warehouse Storage Services", path: "/services/warehouse-storage-services" },
                  { label: "Shipping Services", path: "/services/shipping-services" },
                  { label: "Custom Clearance Services", path: "/services/custom-clearance-services" },
                  { label: "Title Services", path: "/services/title-services" },
                ].map((service, i) => (
                  <li key={i}>
                    <a
                      href={service.path}
                      className="hover:text-white transition"
                      rel="noopener noreferrer"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Opening Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                Opening Hours
                <span className="block w-10 h-[2px] bg-secondary mt-2"></span>
              </h4>

              <div className="space-y-2 md:space-y-3 text-white/80 md:text-white/60 mb-6">
                <div className="flex justify-between">
                  <span>Week Days</span>
                  <span>09.00 - 7.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>08.00 - 2.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Day Off</span>
                </div>
              </div>

              <Link to="/contact" className="bg-secondary text-black px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-300">
                Contact Us <ArrowForwardIcon fontSize="small" />
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 text-white/60 text-sm relative z-10 px-5 md:px-0 text-center">
          <p>
            Copyright © 2026{" "}
            <span className="text-secondary">NEJOUM ALJAZEERA</span> All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;