import { Section } from "lucide-react";
import { CONTACT_INFO } from "../constants";
import { PhoneCall, MailCheck, MapPinHouse } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import React from "react";

const ContactUs = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <section className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        className="my-5"
      >
        <h2 className="text-5xl lg:text-[6rem] font-bold tracking-tighter text-center mb-4 bg-gradient-to-r from-[#ffecc1] via-[#57df83] to-[#229949] bg-clip-text text-transparent">
          Contact Us
        </h2>
        <p className="text-center max-w-2xl mx-auto text-lg mb-12">
          {CONTACT_INFO.text}
        </p>
        <div className="flex flex-col lg:flex-row justify-around mx-4">
          <div className="flex mb-8 lg:mb-0">
            <PhoneCall className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.phone.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.phone.value}</p>
            </div>
          </div>
          <div className="flex mb-8 lg:mb-0">
            <MailCheck className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.email.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.email.value}</p>
            </div>
          </div>
          <div className="flex mb-8 lg:mb-0">
            <MapPinHouse className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.address.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.address.value}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
