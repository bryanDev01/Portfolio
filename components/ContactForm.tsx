"use client";

import { useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";

const emailSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  mail: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type Email = z.infer<typeof emailSchema>;

function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof Email, string>>>(
    {}
  );
  const [formData, setFormData] = useState<Email>({
    name: "",
    mail: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      emailSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof Email, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof Email] = err.message;
          }
        });
        setErrors(newErrors);
        setIsSubmitting(false);
        return;
      }
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Crear y mostrar mensaje de éxito
        const successMessage = document.createElement("div");
        successMessage.className =
          "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-center p-6 rounded-lg shadow-xl z-50 flex flex-col items-center gap-4";
        successMessage.innerHTML = `
          <svg class="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h3 class="text-xl font-bold text-gray-900">¡Mensaje enviado con éxito!</h3>
          <p class="text-gray-600">Gracias por contactarme. Te responderé pronto.</p>
        `;

        // Agregar overlay
        const overlay = document.createElement("div");
        overlay.className = "fixed inset-0 bg-black bg-opacity-50 z-40";
        document.body.appendChild(overlay);
        document.body.appendChild(successMessage);

        // Limpiar formulario
        setFormData({ name: "", mail: "", subject: "", message: "" });

        // Esperar 2 segundos y redirigir
        setTimeout(() => {
          overlay.remove();
          successMessage.remove();
          router.push("/#Home");
        }, 2000);
      } else {
        const errorMessage = document.createElement("div");
        errorMessage.className =
          "fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg transform transition-all duration-500 ease-in-out";
        errorMessage.textContent =
          "Error al enviar el mensaje. Por favor, intenta de nuevo.";
        document.body.appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        const errorMessage = document.createElement("div");
        errorMessage.className =
          "fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg transform transition-all duration-500 ease-in-out";
        errorMessage.textContent =
          "Error al enviar el mensaje. Por favor, intenta de nuevo.";
        document.body.appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
        console.error("Error del cliente", error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-4/6 w-full lg:h-[480px] flex flex-col justify-between items-start lg:gap-3 gap-5 p-6 bg-white rounded-lg shadow-lg shadow-cyan-300 transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400"
    >
      <p className=" lg:text-2xl sm:text-xl text-lg font-semibold">
        Send Message
      </p>
      <div className=" w-full flex md:flex-row flex-col justify-center items-center gap-6">
        <div className=" w-full flex flex-col justify-center gap-1">
          <label htmlFor="name" className=" lg:text-lg text-sm ">
            Your Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            id="name"
            className={`rounded-lg p-2 w-full border ${errors.name ? "border-red-500" : "border-slate-300"} outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all duration-300`}
            placeholder="Name.."
          />
          {errors.name && (
            <span className="text-red-500 text-xs mt-1">{errors.name}</span>
          )}
        </div>
        <div className=" w-full flex flex-col justify-center gap-1">
          <label htmlFor="mail" className="lg:text-lg text-sm ">
            Your Email
          </label>
          <input
            type="email"
            id="mail"
            value={formData.mail}
            onChange={handleChange}
            className={`rounded-lg p-2 w-full border ${errors.mail ? "border-red-500" : "border-slate-300"} outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all duration-300`}
            placeholder="Name@gmail.com.."
          />
          {errors.mail && (
            <span className="text-red-500 text-xs mt-1">{errors.mail}</span>
          )}
        </div>
      </div>
      <div className=" w-full flex flex-col justify-center gap-1">
        <label htmlFor="subject" className=" lg:text-lg text-sm ">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`rounded-lg p-2 w-full border ${errors.subject ? "border-red-500" : "border-slate-300"} outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all duration-300`}
          placeholder="Project Inquiry.."
        />
        {errors.subject && (
          <span className="text-red-500 text-xs mt-1">{errors.subject}</span>
        )}
      </div>
      <div className=" w-full h-full flex flex-col justify-center items-start">
        <label htmlFor="message" className=" lg:text-lg text-sm ">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          className={`rounded-lg p-2 w-full border ${errors.message ? "border-red-500" : "border-slate-300"} outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all duration-300`}
          placeholder="Your message here.."
        />
        {errors.message && (
          <span className="text-red-500 text-xs mt-1">{errors.message}</span>
        )}
      </div>
      <button
        disabled={isSubmitting}
        className={`border border-slate-300 p-2 text-center text-sm lg:text-lg rounded-lg transform transition-all duration-300 flex items-center justify-center gap-2 min-w-[150px] ${isSubmitting ? "bg-baseColor text-white cursor-not-allowed" : "hover:bg-baseColor hover:text-white hover:scale-105 hover:shadow-md"}`}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Enviando...
          </>
        ) : (
          "Enviar Mensaje"
        )}
      </button>
    </form>
  );
}

export default ContactForm;
