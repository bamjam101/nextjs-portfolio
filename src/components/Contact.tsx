"use client";

import { useState, useRef } from "react";

import { motion } from "framer-motion";

import { styles } from "@/app/styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "@/utils/motion";

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleFormDataChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse gap-10 flex overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-transparent p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name={"name"}
              value={form.name}
              onChange={handleFormDataChange}
              placeholder="What's Your Name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg oulined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name={"email"}
              value={form.email}
              onChange={handleFormDataChange}
              placeholder="What's Your Email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg oulined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              onChange={handleFormDataChange}
              name={"message"}
              value={form.message}
              placeholder="Let's talk about something, shall we?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg oulined-none border-none font-medium resize-none"
            />
          </label>
          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit font-bold text-white shadow-md shadow-primary rounded-xl"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
