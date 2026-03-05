import { motion } from "framer-motion";
import worldMap from "@/assets/world-map.png";
import containers from "@/assets/request-containers.png";
import { Link } from 'react-router-dom';

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const RequestQuote = () => {
  return (
    <section id="quote" className="relative py-24 bg-[#0b3574] text-white scroll-mt-28">

      {/* Background Map */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10"
        style={{ backgroundImage: `url(${worldMap})` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-md text-secondary mb-4 font-medium">
            ● Request a Quote
          </p>

          <h2 className="text-4xl lg:text-[40px] font-bold leading-tight mb-6">
            Efficient, Safe, & Swift Logistics{" "}
            <span className="text-secondary relative inline-block">
              SOLUTION!
              <span className="absolute left-0 bottom-1 w-full h-1 bg-secondary -z-10"></span>
            </span>
          </h2>

          <ul className="space-y-4 text-white/80">
            {[
              "Trusted by global vehicle buyers and exporters",
              "Reliable logistics network across ports and auctions",
              "Transparent handling and shipment tracking",
              "Dedicated support from booking to delivery",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <span className="text-secondary">➤</span>
                {item}
              </motion.li>
            ))}
          </ul>

          <Link to="/contact" className="mt-8 bg-secondary hover:bg-yellow-500 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition">
            Contact Us <ArrowOutwardIcon fontSize="small" />
          </Link>
        </motion.div>

        {/* RIGHT FORM CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white text-black p-10 rounded-b-xl shadow-2xl absolute right-0 bottom-[20px] w-1/2"
        >
          <h3 className="text-3xl font-bold mb-6 text-black">
            Request a Quote
          </h3>

          <div className="grid grid-cols-2 gap-6">
            <input className="border rounded-md py-2 px-2.5" placeholder="Name" />
            <input className="border rounded-md py-2 px-2.5" placeholder="Email" />
            <input className="border rounded-md py-2 px-2.5" placeholder="Phone" />
            <input className="border rounded-md py-2 px-2.5" placeholder="City" />
            <input className="border rounded-md py-2 px-2.5" placeholder="State" />
            <input className="border rounded-md py-2 px-2.5" placeholder="Destination" />
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <select className="border rounded-md py-2 px-2.5">
              <option>Freight Type</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button className="mt-10 bg-black text-white py-3 px-5 rounded-lg font-semibold transition">
              Submit Request <ArrowOutwardIcon fontSize="small" />
            </button>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default RequestQuote;