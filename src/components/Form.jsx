import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      ref={form}
      onSubmit={handleFormSubmit}
      className="flex flex-col items-start gap-4"
    >
      <input
        type="text"
        placeholder="Your Name"
        name="name"
        required
        className="border border-white/10 py-2 px-4 rounded-md w-full"
      />
      <input
        type="email"
        placeholder="Your Email"
        name="email"
        required
        className="border border-white/10 py-2 px-4 rounded-md w-full"
      />
      <textarea
        name="message"
        rows={5}
        placeholder="Your Message"
        required
        className="border border-white/10 py-2 px-4 rounded-md w-full"
      ></textarea>
      <div className="flex items-center gap-2">
        <button
          disabled={loading}
          type="submit"
          className={`py-3 px-6 bg-orange-400 font-medium rounded-md ${loading ? "cursor-no-drop" : "cursor-pointer"} text-md`}
        >
          {loading ? "Submitting..." : "Submit Form"}
        </button>
        <button
          type="reset"
          className="py-3 px-6 cursor-pointer bg-white text-black font-medium rounded-md text-md"
        >
          Reset Form
        </button>
      </div>
    </form>
  );
}

export default Form;
