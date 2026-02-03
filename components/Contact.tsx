"use client";

import { useState } from "react";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";
import { maskApiKey } from "@/lib/env";

type ContactProps = {
  adminEmail: string;
  apiKey: string;
};

export default function Contact({ adminEmail, apiKey }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [payload, setPayload] = useState<Record<string, unknown> | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitted(false);

    try {
      const validated = contactFormSchema.parse(formData);

      // Build payload with env vars
      const submissionPayload = {
        ...validated,
        adminEmail,
        apiKey,
        timestamp: new Date().toISOString(),
      };

      setPayload(submissionPayload);
      setIsSubmitted(true);

      // Optional: Call API route
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionPayload),
      });
    } catch (error) {
      if (error instanceof Error && "errors" in error) {
        const zodError = error as {
          errors: Array<{ path: string[]; message: string }>;
        };
        const fieldErrors: Record<string, string> = {};
        zodError.errors.forEach((err) => {
          const field = err.path[0];
          if (field) fieldErrors[field] = err.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-lg shadow-md"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message * (min 10 characters)
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Send Message
          </button>
        </form>

        {/* Demo Submission Panel */}
        {isSubmitted && payload && (
          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              ✓ Message prepared (demo). No email sent.
            </h3>

            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Admin Email:</span>{" "}
                <code className="bg-white px-2 py-1 rounded">{adminEmail}</code>
              </p>
              <p>
                <span className="font-medium">API Key:</span>{" "}
                <code className="bg-white px-2 py-1 rounded">
                  {maskApiKey(apiKey)}
                </code>
              </p>
              <div>
                <p className="font-medium mb-2">JSON Payload Preview:</p>
                <pre className="bg-white p-4 rounded border border-gray-200 overflow-x-auto text-xs">
                  {JSON.stringify(
                    { ...payload, apiKey: maskApiKey(apiKey) },
                    null,
                    2,
                  )}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
