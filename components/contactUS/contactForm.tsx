"use client"

import React, { useState } from "react"
import PhoneNumberField from "./phoneInput"
import emailjs from "emailjs-com"

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState<{
    status: "success" | "error" | null
    message: string
  }>({
    status: null,
    message: "",
  })
  const [formData, setFormData] = useState({
    name: "",
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
    const serviceID = "service_dqq63eh"
    const templateID = "template_34n4hl4"
    const publicKey = "zKFS9nqjy5jxMAYfA"
    const formattedData = {
      to_name: "Tumble",
      from_name: formData.name,
      subject: formData.subject,
      message: formData.message,
      phone_number: formData.phoneNumber,
      email: formData.contactEmail,
    }

    emailjs.send(serviceID, templateID, formattedData, publicKey).then(
      (response) => {
        console.log("sucess!", response.status, response.text)
        setStatusMessage({
          status: "success",
          message: "Message sent successfully!",
        })
        setFormData({
          name: "",
          phoneNumber: "",
          contactEmail: "",
          subject: "",
          message: "",
        })
      },
      (err) => {
        console.error("Failed...", err)
        setStatusMessage({
          status: "error",
          message: "Failed to send message. Please try again.",
        })
      }
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap mb-3">
        <div className="w-full lg:w-1/2 lg:px-2 mb-3 lg:mb-0">
          <input
            className="autofill:shadow-none block w-full py-2 px-4 text-lg border-b outline-none bg-transparent border border-neutral-700 focus:outline-stone-700 placeholder:text-sm text-neutral-450"
            type="text"
            placeholder="Full Name *"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full lg:w-1/2 lg:px-2">
          <PhoneNumberField
            value={formData.phoneNumber}
            handleChange={handleChange}
          />
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
      <p
        className={`${
          statusMessage.status === "error" ? "text-red-500" : "text-green-500"
        } mt-3 text-lg ps-3`}
      >
        {statusMessage.message}
      </p>
    </form>
  )
}

export default ContactForm
