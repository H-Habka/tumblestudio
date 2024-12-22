"use client"

import React, { useState } from "react"
import PhoneNumberField from "./phoneInput"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumberCountry: "ZZ",
    phoneNumber: "",
    contactEmail: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Form Submitted:", formData)
    // Add submission logic here
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap mb-3">
        <div className="w-full lg:w-1/2 lg:px-2 mb-3 lg:mb-0">
          <input
            className="block w-full py-2 px-4 text-lg border-b outline-none bg-transparent border border-neutral-700 focus:outline-stone-700 placeholder:text-sm text-neutral-450"
            type="text"
            placeholder="Full Name *"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full lg:w-1/2 lg:px-2">
          <PhoneNumberField />
        </div>
      </div>
      <div className="flex flex-wrap mb-3">
        <div className="w-full lg:w-1/2 lg:px-2 mb-3 lg:mb-0">
          <input
            className="block w-full py-2 px-4 text-lg border-b outline-none bg-transparent border border-neutral-700 focus:outline-stone-700 placeholder:text-sm text-neutral-450"
            type="email"
            placeholder="Contact Email *"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full lg:w-1/2 lg:px-2">
          <input
            className="block w-full py-2 px-4 text-lg border-b outline-none bg-transparent border border-neutral-700 focus:outline-stone-700 placeholder:text-sm text-neutral-450"
            type="text"
            placeholder="Subject *"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="lg:mx-2 mb-3">
        <textarea
          className="block w-full py-2 px-4 text-lg border-b outline-none bg-transparent border border-neutral-700 focus:outline-stone-700 placeholder:text-sm text-neutral-450"
          name="message"
          rows={5}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="lg:mx-2">
        <button
          className="block w-full py-2 px-4 border-b outline-none resize-none bg-transparent border border-neutral-700 focus:outline-stone-700 text-sm text-neutral-450"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm
