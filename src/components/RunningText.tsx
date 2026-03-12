import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n";


export default function RunningText() {
  const { t, i18n } = useTranslation();
  const rtl = isRTL(i18n.language);

  const text = t("runningText", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="w-full overflow-hidden bg-[#013188] py-4">

      <div
        className={`marquee group flex whitespace-nowrap ${
          rtl ? "flex-row-reverse marquee-rtl" : ""
        }`}
      >

        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="marquee-track group-hover:[animation-play-state:paused]"
          >
            {text.map((item, index) => (
              <span key={index} className="marquee-item">
                {item}
                <span className="mx-8">*</span>
              </span>
            ))}
          </div>
        ))}

      </div>

    </div>
  );
}