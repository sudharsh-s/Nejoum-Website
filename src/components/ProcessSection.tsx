import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Buy Vehicle at Auction",
    desc: "Purchase your vehicle from any major US auction house",
    color: "bg-blue-600",
  },
  {
    number: 2,
    title: "Submit Pickup Request",
    desc: "Provide auction details and destination information",
    color: "bg-blue-600",
  },
  {
    number: 3,
    title: "Vehicle Pickup",
    desc: "Professional pickup with full documentation and photos",
    color: "bg-blue-600",
  },
  {
    number: 4,
    title: "Transport to Export Yard",
    desc: "Secure transport with real-time tracking updates",
    color: "bg-orange-500",
  },
  {
    number: 5,
    title: "Ready for Shipping",
    desc: "Vehicle delivered and prepared for international export",
    color: "bg-green-600",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800">
          Our Simple 5-Step Process
        </h2>

        <p className="text-gray-500 mt-2">
          From auction purchase to export yard delivery
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-8 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 origin-left"
        />

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-10 text-center relative">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >

              {/* Circle */}
              <div className="flex justify-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg ${step.color}`}
                >
                  {step.number}
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}