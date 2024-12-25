import React from "react"
import { MdEmail } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"
import { socialMedia } from "@/constants/contactDetails"
import { FaTiktok } from "react-icons/fa"
import { RiWhatsappFill } from "react-icons/ri"

const ContactDetailsBar = () => {
  return (
    <div className="bg-theme-1 ">
      <div className="flex justify-center 768:justify-between items-center text-xs py-2  2xl:container 2xl:mx-auto px-4">
        <div className=" hidden 768:flex items-center  [&>*]:border-e [&>*]:px-3 last:[&>*]:border-none">
          <div className="px-2">
            <a
              href={`https://api.whatsapp.com/send?phone=${socialMedia.phone1}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 group"
            >
              <RiWhatsappFill className="transition-all duration-150 group-hover:-translate-y-0.5" />
              <span>{socialMedia.phone1}</span>
            </a>
          </div>
          <div className="px-2">
            <a
              href={`https://api.whatsapp.com/send?phone=${socialMedia.phone2}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 group"
            >
              <RiWhatsappFill className="transition-all duration-150 group-hover:-translate-y-0.5" />
              <span>{socialMedia.phone2}</span>
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
              <span>{socialMedia.email}</span>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex  items-center justify-center gap-4 [&>a>*]:w-4 [&>a>*]:h-4">
            <a
              href={socialMedia.tiktok}
              target="_blank"
              rel="noreferrer"
              className="hover:-translate-y-0.5 transition-all duration-150"
            >
              <FaTiktok />
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
          <div className="768:hidden  flex  items-center justify-center gap-4 [&>a>*]:w-4 [&>a>*]:h-4">
            <a
              href={`https://api.whatsapp.com/send?phone=${socialMedia.phone1}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center "
            >
              <RiWhatsappFill className="transition-all duration-150" />
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${socialMedia.phone1}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center "
            >
              <RiWhatsappFill className="transition-all duration-150" />
            </a>
            <a
              href={`mailto:${socialMedia.email}?subject=Get%20In%20Touch`}
              rel="noreferrer"
              target="_blank"
              className="flex items-center "
            >
              <MdEmail className="transition-all duration-150" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDetailsBar
