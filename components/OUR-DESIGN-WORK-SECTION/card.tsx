import Image from "next/image"
import React from "react"

const DesignWorkCard = ({
  reversed,
  imageSrc,
  description,
  title,
}: {
  reversed?: boolean
  imageSrc: string
  title: string
  description: string
}) => {
  return (
    <div className="bg-dark-3   flex flex-wrap 768:top-[220px] top-[160px]">
      <div
        className={`w-full h-96 sm:h-[500px] order-1 768:w-1/2 xl:w-2/5 ${
          reversed ? "768:order-2" : "768:order-1"
        }`}
      >
        <div className="py-5 sm:py-14 lg:py-20 h-full max-w-md xl:max-w-sm px-4 xl:px-0 mx-auto flex flex-col justify-between text-center sm:text-start">
          <h2 className="text-4xl xl:text-5xl font-extralight uppercase">
            {title}
          </h2>
          <div className="text-sm sm:text-base text-justify py-2">
            <p>{description}</p>
          </div>
          <p className="text-xs">CHECK OUT OUR PROJECTS</p>
        </div>
      </div>
      <div
        className={`w-full h-96 sm:h-[500px] order-2 768:w-1/2 xl:w-3/5 ${
          reversed ? "768:order-1" : "768:order-2"
        }`}
      >
        <Image
          alt="interior design company in Dubai"
          loading="lazy"
          width={500}
          height={500}
          className="w-full h-full object-cover"
          src={imageSrc}
        />
      </div>
    </div>
  )
}

export default DesignWorkCard
