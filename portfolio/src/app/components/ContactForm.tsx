"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export default function ContactForm() {
  const initialValues = { name: "", email: "", message: "" };

  const handleSubmit = async (
    values: { name: string; email: string; message: string },
    { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const rawText = await response.text();

      if (!response.ok) {
        console.error("Error sending message:", rawText);
        alert("An error occurred while sending the message.");
      } else {
        const data = JSON.parse(rawText);
        console.log("Message sent:", data.message);
        alert("Your message has been sent!");
        resetForm();
      }
    } catch (error) {
      console.error("Network or parsing error:", error);
      alert("An error occurred while sending the message.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className=" w-full p-4 lg:w-1/2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium">Name</label>
              <Field
                type="text"
                name="name"
                className="w-full border border-[#EF6FDE] focus:border-[#84D3FF] outline-none p-2 rounded"
              />
              <ErrorMessage name="name" component="div" className="text-red-400 text-sm" />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full border border-[#EF6FDE] focus:border-[#84D3FF] outline-none p-2 rounded"
              />
              <ErrorMessage name="email" component="div" className="text-red-400 text-sm" />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium">Message</label>
              <Field
                as="textarea"
                name="message"
                rows="4"
                className="w-full border border-[#EF6FDE] focus:border-[#84D3FF] outline-none p-2 rounded"
              />
              <ErrorMessage name="message" component="div" className="text-red-400 text-sm" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-[#EF6FDE] activefocus:border-[#84D3FF] via-[#DF84FF] to-[#84D3FF] text-white font-bold py-2 px-4 rounded self-end"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}


