"use client"

import { useState } from "react";

interface Email {
  name: string;
  mail: string;
  subject: string;
  message: string;
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Email>({
    name: "",
    mail: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response)
      if (response.ok) {
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg transform transition-all duration-500 ease-in-out';
        successMessage.textContent = 'Message sent successfully!';
        document.body.appendChild(successMessage);
        setTimeout(() => successMessage.remove(), 3000);
        setFormData({ name: "", mail: "", subject: "", message: "" });
      } else {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg transform transition-all duration-500 ease-in-out';
        errorMessage.textContent = 'Failed to send message.';
        document.body.appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
      }
    } catch (error: unknown) {
      if(error instanceof Error) {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg transform transition-all duration-500 ease-in-out';
        errorMessage.textContent = 'An error occurred. Please try again.';
        document.body.appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
        console.error("Error del cliente", error.message)
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="lg:w-4/6 w-full h-full flex flex-col justify-center items-start lg:gap-3 gap-5 p-6 bg-white rounded-lg shadow-lg shadow-cyan-300 transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400">
      <p className=" lg:text-2xl sm:text-xl text-lg font-semibold">
        Send Message
      </p>
      <div className=" w-full flex md:flex-row flex-col justify-center items-center gap-6">
        <div className=" w-full flex flex-col justify-center gap-1">
          <label htmlFor="name" className=" lg:text-lg text-sm ">Your Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            id="name"
            className="rounded-lg p-2 w-full border border-slate-300 outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all duration-300"
            placeholder="Name.."
          />
        </div>
        <div className=" w-full flex flex-col justify-center gap-1">
          <label htmlFor="mail" className="lg:text-lg text-sm ">Your Email</label>
          <input
            type="email"
            id="mail"
            value={formData.mail}
            onChange={handleChange}
            className=" rounded-lg p-2 w-full border border-slate-300 outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all duration-300"
            placeholder="Name@gmail.com.."
          />
        </div>
      </div>
      <div className=" w-full flex flex-col justify-center gap-1 ">
        <label htmlFor="subject" className=" lg:text-lg text-sm ">Subject</label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          className="rounded-lg p-2 w-full border border-slate-300 outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all duration-300"
          placeholder="Project Inquiry.."
        />
      </div>
      <div className=" w-full h-full flex flex-col justify-center items-start">
        <label htmlFor="message" className=" lg:text-lg text-sm ">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          className="rounded-lg p-2 w-full border border-slate-300 outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all duration-300"
          placeholder="Your message here.."
        />
      </div>
      <button disabled={isSubmitting} className={`border border-slate-300 p-2 text-center text-sm lg:text-lg rounded-lg transform transition-all duration-300 ${isSubmitting ? 'bg-gray-300 cursor-not-allowed' : 'hover:bg-baseColor hover:text-white hover:scale-105 hover:shadow-md'}`}>
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
