import React from "react"
import { FaPhone } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const ContactDetailsBar = () => {
  return (
    <div className="bg-dark-1 flex justify-between items-center text-xs py-2 px-20 ">
      <div className="flex items-center  [&>*]:border-e [&>*]:px-3 last:[&>*]:border-none">
        <div className="flex items-center gap-2">
          <FaPhone />
          <span>+971 52 811 1106</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone />
          <span>+971 52 811 1106</span>
        </div>
        <div className="flex items-center gap-2">
          <MdEmail />
          <span>hossien.habka1@gmail.com</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FaFacebookF />
        <FaLinkedinIn />
        <FaInstagram />
      </div>
    </div>
  )
}

export default ContactDetailsBar
