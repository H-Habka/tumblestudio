import React from "react"
import { FaPhone } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { socialMedia } from "@/constants/contactDetails"

const ContactDetailsBar = () => {
  return (
    <div className="bg-dark-1 flex justify-center 640:justify-between items-center text-xs py-2 768:px-20 640:px-10 px-4 ">
      <div className=" hidden 640:flex items-center  [&>*]:border-e [&>*]:px-3 last:[&>*]:border-none">
        <div className="px-2">
          <a
            href=""
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-2 group"
          >
            <FaPhone className="transition-all duration-150 group-hover:-translate-y-0.5" />
            <span>+971 52 811 1106</span>
          </a>
        </div>
        <div className="px-2">
          <a
            href=""
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-2 group"
          >
            <FaPhone className="transition-all duration-150 group-hover:-translate-y-0.5" />
            <span>+971 52 811 1106</span>
          </a>
        </div>
        <div className="px-2">
          <a
            href={`mailto:${socialMedia.email}?subject=Get%20In%20Touch`}
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-2 group"
          >
            <MdEmail className="transition-all duration-150 group-hover:-translate-y-0.5" />
            <span>hossien.habka1@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 [&>*]:w-4 [&>*]:h-4 ">
        <a
          href={socialMedia.facebook}
          target="_blank"
          rel="noreferrer"
          className="hover:-translate-y-0.5 transition-all duration-150"
        >
          <FaFacebookF />
        </a>
        <a
          href={socialMedia.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:-translate-y-0.5 transition-all duration-150"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={socialMedia.instagram}
          target="_blank"
          rel="noreferrer"
          className="hover:-translate-y-0.5 transition-all duration-150"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  )
}

export default ContactDetailsBar
