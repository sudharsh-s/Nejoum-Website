import { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocationPinIcon from '@mui/icons-material/LocationPin';

import BrandSlider from "@/components/BrandSlider";

import bg from "@/assets/contact.webp";

export default function ContactSection() {
  return (
    <div>
      <section className="relative bg-black text-white pt-36 pb-28 overflow-hidden">

        <img src={bg} alt="Contact Background" className="absolute inset-0 w-full h-full object-cover opacity-70" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative">

          {/* LEFT SIDE */}
          <div>

            <p className="flex items-center gap-3 text-sm text-white/70 mb-6">
              <span className="w-3 h-3 bg-primary rounded-sm"></span>
              Contact Us
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-16">
              Count On Us <br /> For Answers
            </h2>

            {/* Contact Info */}
            <div className="flex gap-14">

              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                  <MailOutlineIcon />
                </div>
                <div>
                  <p className="text-white/50 text-sm">E-mail Address</p>
                  <p className="font-semibold text-white/90">info@naj.ae</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                  <CallOutlinedIcon />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Phone Number</p>
                  <p className="font-semibold text-white/90">+971 600 565 686</p>
                </div>
              </div>

            </div>

            {/* Location */}
            <div className="flex items-center gap-5 mt-7">
              <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                <LocationPinIcon />
              </div>
              <div>
                <p className="text-white/50 text-sm">Our Location</p>
                <p className="font-semibold text-white/90">NEJOUM ALJAZEERA Group Industrial area 4, Sharjah, UAE.</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative">

            {/* Glass Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.05)]">

              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-2">
                  Get In Touch
                </h3>
                <p className="text-white/70">
                  Send us a message and we will get back to you as soon as possible.
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">

                <div className="grid grid-cols-2 gap-6">
                  <input
                    placeholder="Enter your name"
                    className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition"
                  />
                  <input
                    placeholder="Enter your email"
                    className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <input
                    placeholder="Enter weight in kg"
                    className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition"
                  />
                  <select className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition text-white/70">
                    <option>Choose type of service</option>
                  </select>
                </div>

                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition text-white/70">
                  <option>Choose pickup city</option>
                </select>

                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition text-white/70">
                  <option>Choose delivery city</option>
                </select>

              </div>

              {/* Submit Button */}
              <button className="w-full mt-10 gradient-primary transition py-4 rounded-xl text-lg font-semibold">
                Send Request
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