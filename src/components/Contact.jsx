import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <section
      id="contact-section"
      className="border-t border-white/10 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 py-16"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-shadow-[0_0_1rem_rgba(255,255,255,0.3)]">
          Get In Contact
        </h2>

        <div className="w-30 sm:w-42 bg-linear-to-r from-orange-400/5 via-orange-400 to-orange-400/5 h-1 rounded-full mt-10 max-lg:mb-16 mb-20"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:gap-16 gap-20 w-full">
          <div className="relative">
            <iframe
              className="w-full max-sm:h-64 h-full rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.644581919568!2d74.34248477537196!3d31.45145025054439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907d4fddf56d5%3A0x80605d239a1e5f47!2sJamia%20Masjid%20Madnia%20Ahle%20Hadees!5e0!3m2!1sen!2s!4v1781080058275!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
          <div className="relative">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
