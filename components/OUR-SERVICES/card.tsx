import Image from "next/image"
import Link from "next/link"
import React from "react"

const ServicesCard = ({
  imageSrc,
  title,
  href,
}: {
  imageSrc: string
  title: string
  href: string
}) => {
  return (
    <Link
      className="relative border border-gray-100 group overflow-hidden aspect-square"
      href={href}
    >
      <Image
        width={1000}
        height={1000}
        alt={title}
        className="w-full h-full object-cover transition ease-out duration-500 brightness-50 group-hover:brightness-100"
        src={imageSrc}
      />
      <div className="absolute bg-gray-800 inset-0 transition ease-out duration-500 opacity-10 group-hover:opacity-0 group-hover:bg-transparent"></div>
      <div className="absolute w-5/6 mx-auto inset-0 top-1/2">
        <h2 className="font-light text-xl text-center transition ease-out duration-500 text-gray-200 group-hover:text-transparent">
          {title}
        </h2>
      </div>
    </Link>
  )
}

export default ServicesCard
