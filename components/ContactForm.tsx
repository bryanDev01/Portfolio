"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { emailSchema } from "@/lib/emailSchema";
import { CheckCircle2, X } from "lucide-react";

type Email = z.infer<typeof emailSchema>;

const EMPTY_FORM: Email = { name: "", mail: "", subject: "", message: "" };

const SEND_ERROR_MESSAGE =
  "Failed to send the message. Please, try again.";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof Email, string>>>(
    {}
  );
  const [formData, setFormData] = useState<Email>(EMPTY_FORM);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorToast, setErrorToast] = useState<string | null>(null);

  // Auto-dismiss the success modal and the error toast
  useEffect(() => {
    if (!showSuccess) return;
    const timer = setTimeout(() => setShowSuccess(false), 2000);
    return () => clearTimeout(timer);
  }, [showSuccess]);

  useEffect(() => {
    if (!errorToast) return;
    const timer = setTimeout(() => setErrorToast(null), 3000);
    return () => clearTimeout(timer);
  }, [errorToast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = emailSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Partial<Record<keyof Email, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof Email | undefined;
        if (field && !newErrors[field]) {
          newErrors[field] = issue.message;
        }
      }
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      if (response.ok) {
        setFormData(EMPTY_FORM);
        setShowSuccess(true);
      } else {
        setErrorToast(SEND_ERROR_MESSAGE);
      }
    } catch (error: unknown) {
      console.error("Error del cliente:", error);
      setErrorToast(SEND_ERROR_MESSAGE);
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

  const inputClass = (hasError: boolean) =>
    `rounded-xl p-3 w-full bg-slate-50 border ${
      hasError ? "border-red-400" : "border-slate-200"
    } placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-baseColor/40 focus:bg-white focus:border-transparent transition-all duration-300`;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full lg:h-[480px] flex flex-col justify-between items-start lg:gap-3 gap-5 p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white ring-1 ring-slate-100 shadow-xl shadow-cyan-300/50 transform transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/40"
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
              className={inputClass(!!errors.name)}
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
              className={inputClass(!!errors.mail)}
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
            className={inputClass(!!errors.subject)}
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
            rows={4}
            className={`${inputClass(!!errors.message)} resize-y min-h-[90px]`}
            placeholder="Your message here.."
          />
          {errors.message && (
            <span className="text-red-500 text-xs mt-1">{errors.message}</span>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`p-3 text-center text-sm lg:text-lg rounded-xl font-semibold transform transition-all duration-300 flex items-center justify-center gap-2 min-w-[150px] ${
            isSubmitting
              ? "bg-gradient-to-r from-baseColor to-secondColor text-white cursor-not-allowed"
              : "bg-gradient-to-r from-baseColor to-secondColor bg-[length:200%_auto] bg-left hover:bg-right text-white hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-300/60 active:translate-y-0 border-none"
          }`}
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
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {/* Success modal */}
      {showSuccess && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          onClick={() => setShowSuccess(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Message sent"
        >
          <div className="bg-white text-center p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4 animate-pop-in">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
            <h3 className="text-xl font-bold text-gray-900">
              Message sent successfully!
            </h3>
            <p className="text-gray-600">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
          </div>
        </div>
      )}

      {/* Error toast */}
      {errorToast && (
        <div
          className="fixed top-4 right-4 z-50 flex items-center gap-3 bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg animate-slide-in-right"
          role="alert"
        >
          <span>{errorToast}</span>
          <button
            onClick={() => setErrorToast(null)}
            aria-label="Close notification"
            className="hover:opacity-75"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}

export default ContactForm;
