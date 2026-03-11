import { motion, AnimatePresence } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface Props {
  open: boolean;
  onClose: () => void;
}

const QuoteModal = ({ open, onClose }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-[101] p-4"
          >
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-4 md:p-6">

              <h3 className="text-[22px] md:text-[25px] font-bold mb-6 text-gray-900">
                Request a Quote
              </h3>

              <form className="space-y-4 md:space-y-6">

                {/* Grid Fields */}
                <div className="grid grid-cols-1 gap-4 md:gap-6">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                  />

                  <input
                    type="text"
                    placeholder="City"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                  />

                  {/* <input
                    type="text"
                    placeholder="State"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                  />

                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                  /> */}

                </div>

                {/* Freight Type */}
                {/* <div>

                  <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition">
                    <option>Select Freight Type</option>
                    <option>Vehicle Shipping</option>
                    <option>Container Shipping</option>
                    <option>Air Freight</option>
                    <option>Sea Freight</option>
                    <option>Warehouse Storage</option>
                  </select>

                </div> */}

                {/* Submit */}
                <div className="grid md:flex justify-end gap-3 md:gap-4 pt-4">

                  <button type="button" onClick={onClose} className="px-6 py-3 rounded-lg bg-gray-200" > Cancel </button>

                  <button
                    type="submit"
                    className="flex items-center gap-2 gradient-primary text-white px-6 py-3 rounded-lg transition-all"
                  >
                    Submit Request
                    <ArrowOutwardIcon fontSize="small" />
                  </button>

                </div>

              </form>

              
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;