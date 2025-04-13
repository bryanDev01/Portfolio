"use client"

import { useState } from "react";

interface Email {
  name: string;
  mail: string;
  subject: string;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<Email>({
    name: "",
    mail: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Estos son los datos que seran enviados", formData)

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
        alert("Message sent successfully!");
        setFormData({ name: "", mail: "", subject: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error: unknown) {
      if(error instanceof Error) {
        alert("An error occurred. Please try again.");
        console.error("Error del cliente", error.message)
      }
      console.log(error)
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className=" lg:w-4/6 w-full h-full flex flex-col justify-center items-start lg:gap-3 gap-5 p-6 bg-white rounded-lg shadow-lg shadow-cyan-300">
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
            className=" rounded-lg p-2 w-full border border-slate-300 outline-none"
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
            className=" rounded-lg p-2 w-ful border border-slate-300 outline-none"
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
          className=" rounded-lg p-2 w-full border border-slate-300 outline-none"
          placeholder="Project Inquiry.."
        />
      </div>
      <div className=" w-full h-full flex flex-col justify-center items-start">
        <label htmlFor="message" className=" lg:text-lg text-sm ">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          className=" rounded-lg p-2 w-full border border-slate-300 outline-none"
          placeholder="Your message here.."
        />
      </div>
      <button className=" border border-slate-300 hover:bg-baseColor p-2 text-center text-sm lg:text-lg rounded-lg">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
