import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Item {
  title: string;
  content: string[];
}

interface Props {
  items: Item[];
}

export default function ServiceAccordion({ items }: Props) {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">

      {items.map((item, index) => {

        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
          >

            {/* HEADER */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-lg"
            >
              {item.title}

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ExpandMoreIcon />
              </motion.div>

            </button>


            {/* CONTENT */}
            <AnimatePresence>

              {isOpen && (

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >

                  <div className="px-6 pb-4 text-gray-600 space-y-2">

                    {item.content.map((text, i) => (
                      <div key={i} className="flex gap-2">
                        <span className="text-primary">✔</span>
                        <span className="text-gray-500 text-base leading-6">{text}</span>
                      </div>
                    ))}

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </div>
        );
      })}
    </div>
  );
}