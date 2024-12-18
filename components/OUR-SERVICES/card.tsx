import Image from "next/image"
import React from "react"

const ServicesCard = ({
  imageSrc,
  title,
}: {
  imageSrc: string
  title: string
}) => {
  return (
    <a
      className="relative border border-golden group overflow-hidden"
      href="/en/services/architect-design"
    >
      <Image
        width={500}
        height={500}
        alt="service"
        className="w-full h-72 object-cover transition ease-out duration-500 brightness-50 group-hover:brightness-100"
        src={imageSrc}
      />
      <div className="absolute bg-black inset-0 transition ease-out duration-500 opacity-20 group-hover:opacity-0 group-hover:bg-transparent"></div>
      <div className="absolute w-5/6 mx-auto inset-0 top-1/2">
        <h2 className="font-light text-xl text-center transition ease-out duration-500 text-cream group-hover:text-transparent">
          {title}
        </h2>
      </div>
    </a>
  )
}

export default ServicesCard
