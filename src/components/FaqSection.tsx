import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import faqTop from "@/assets/faq01.jpg";
import faqBottom from "@/assets/faq02.jpg";

const faqs = [
  {
    question: "What Locations Do You Ship To And From?",
    answer:
      "Throughout these stages, contractors, engineers, and project managers collaborate to ensure successful project execution, adhering to timelines and budget constraints.",
  },
  {
    question: "What Types Of Shipping Services Do You Offer?",
    answer:
      "We offer air freight, ocean freight, road transportation, warehousing, customs clearance, and end-to-end logistics management.",
  },
  {
    question: "How Can I Get A Quote For My Shipment?",
    answer:
      "Simply contact us via our quote form or speak to our logistics advisor. We provide fast and accurate pricing.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState(0);

  const toggle = (index: number) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>

          <p className="inline-block border border-primary text-primary px-4 py-2 rounded-md text-sm font-medium mb-6">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl lg:text-[40px] font-bold leading-tight mb-6">
            Find Your Shipping Answers Here: Tranzit FAQ
          </h2>

          <p className="text-gray-500 mb-10 max-w-xl">
            You can consider adding a sentence about Tranzit's commitment to providing excellent customer service throughout the shipping process.
          </p>

          {/* ACCORDION */}
          <div className="space-y-4">

  {faqs.map((faq, index) => {
    const isOpen = active === index;

    return (
      <motion.div
        key={index}
        layout
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="bg-gray-100 rounded-xl overflow-hidden"
      >
        {/* Question */}
        <button
          onClick={() => toggle(index)}
          className="w-full flex justify-between items-center p-6 text-left font-semibold text-[#0d1b2a]"
        >
          {faq.question}

          <motion.span
  className="bg-primary text-white w-10 h-10 rounded-md flex items-center justify-center relative overflow-hidden"
>
  <AnimatePresence mode="wait" initial={false}>
    {isOpen ? (
      <motion.div
        key="minus"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <RemoveIcon />
      </motion.div>
    ) : (
      <motion.div
        key="plus"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <AddIcon />
      </motion.div>
    )}
  </AnimatePresence>
</motion.span>
        </button>

        {/* Answer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-6 text-gray-600"
            >
              {faq.answer}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  })}

</div>

        </div>

        {/* RIGHT IMAGE LAYOUT */}
        <div className="relative pl-10">

          {/* Top Image */}
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src={faqTop}
            className="rounded-2xl w-[80%]"
          />

          {/* Red Stat Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-10 right-[-40px] bg-primary text-white px-10 py-8 rounded-xl shadow-xl"
          >
            <h3 className="text-4xl text-center font-bold">2M</h3>
            <p className="text-sm mt-2">Deliver Goods Every Weeks</p>
          </motion.div>

          {/* Bottom Image */}
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src={faqBottom}
            className="rounded-2xl w-[80%] -mt-12 ml-auto border-[6px] border-white relative z-[2]"
          />

          {/* Blue Stat Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-10 left-30px] text-center bg-primary text-white px-10 py-8 rounded-xl shadow-xl z-[10]"
          >
            <h3 className="text-4xl font-bold">5M</h3>
            <p className="text-sm mt-2">Happy Customer</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}