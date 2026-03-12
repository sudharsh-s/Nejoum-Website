import { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n";

import BrandSlider from "@/components/BrandSlider";

import bg from "@/assets/contact.webp";

export default function ContactSection() {
  const { t, i18n } = useTranslation();
  const rtl = isRTL(i18n.language);

  return (
    <div>
      <section className="relative bg-black text-white pt-28 md:pt-36 pb-16 md:pb-28 overflow-hidden">

        <img src={bg} alt="Contact Background" className="absolute inset-0 w-full h-full object-cover opacity-70" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-20 items-center relative">

          {/* LEFT SIDE */}
          <div>

            {/* <p className="flex items-center gap-3 text-sm text-white/70 mb-6">
              <span className="w-3 h-3 bg-primary rounded-sm"></span>
              Contact Us
            </p> */}

            <h2 className="text-[27px] md:text-6xl font-bold leading-tight mb-7 md:mb-16">
              {t("contactSection.title")}
            </h2>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

              <div className="mb-7 md:mb-0">
                <h4 className="text-xl font-bold mb-4">{t("contactSection.countries.uae")}</h4>
                {/* Email */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                    <MailOutlineIcon />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{t("contactSection.labels.email")}</p>
                    <p className="font-semibold text-white/90">info@naj.ae</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-5 mt-7">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                    <CallOutlinedIcon />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{t("contactSection.labels.phone")}</p>
                    <p className="font-semibold text-white/90">+971 600 565 686</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-5 mt-7">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                    <LocationPinIcon />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{t("contactSection.labels.location")}</p>
                    <p className="font-semibold text-white/90">Sharjah, UAE.</p>
                  </div>
                </div>

              </div>

              <div>
                <h4 className="text-xl font-bold mb-4">{t("contactSection.countries.oman")}</h4>
                {/* Email */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                    <MailOutlineIcon />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{t("contactSection.labels.email")}</p>
                    <p className="font-semibold text-white/90">cs.oman@naj.ae</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-5 mt-7">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                    <CallOutlinedIcon />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{t("contactSection.labels.phone")}</p>
                    <p className="font-semibold text-white/90">0096894744020</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-5 mt-7">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                    <LocationPinIcon />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{t("contactSection.labels.location")}</p>
                    <p className="font-semibold text-white/90">Seeb, Oman.</p>
                  </div>
                </div>

              </div>

            </div>


          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative">

            {/* Glass Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 md:p-8 shadow-[0_0_40px_rgba(255,255,255,0.05)]">

              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-2">
                  {t("contactSection.form.title")}
                </h3>
                <p className="text-white/70 text-sm md:text-base">
                  {t("contactSection.form.subtitle")}
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-3 md:space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                  <input
                    placeholder={t("contactSection.form.name")}
                    className="bg-white/5 border border-white/10 rounded-xl px-3 md:px-6 py-4 outline-none focus:border-orange-500 transition"
                  />
                  <input
                    placeholder={t("contactSection.form.email")}
                    className="bg-white/5 border border-white/10 rounded-xl px-3 md:px-6 py-4 outline-none focus:border-orange-500 transition"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                  <input
                    placeholder={t("contactSection.form.weight")}
                    className="bg-white/5 border border-white/10 rounded-xl px-3 md:px-6 py-4 outline-none focus:border-orange-500 transition"
                  />
                  <select className="bg-white/5 border border-white/10 rounded-xl px-3 md:px-6 py-4 outline-none focus:border-orange-500 transition text-white/70">
                    <option>{t("contactSection.form.service")}</option>
                  </select>
                </div>

                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-3 md:px-6 py-4 outline-none focus:border-orange-500 transition text-white/70">
                  <option>{t("contactSection.form.pickup")}</option>
                </select>

                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-3 md:px-6 py-4 outline-none focus:border-orange-500 transition text-white/70">
                  <option>{t("contactSection.form.delivery")}</option>
                </select>

              </div>

              {/* Submit Button */}
              <button className="w-full mt-7 md:mt-10 gradient-primary transition py-4 rounded-xl text-base md:text-lg font-semibold">
                {t("contactSection.form.submit")}
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* BRANDS */}
      <BrandSlider />
    </div>
  );
}