import React from "react"
import DesignWorkCard from "./card"

const OurDesignWorkSection = () => {
  return (
    <div>
      <div className="flex items-center justify-center sticky top-[80px] 768:top-[140px] bg-dark-2 py-2">
        <p className="640:text-5xl text-3xl bg-dark-2 ">OUR DESIGN WORK</p>
      </div>
      <div className="768:mt-[80px] mt-10 flex flex-col gap-5  2xl:container 2xl:mx-auto px-4">
        <DesignWorkCard
          title="Interior Design Work"
          description="Algedra is the best interior design company in Dubai, and across
              UAE for our professionalism in interior design in Dubai and Abu
              Dhabi. Awarded for elegant and unique projects, we are among the
              top interior design companies in Dubai, UAE. Our services are
              created by experience interior designers in Dubai, specializing in
              luxury interiors."
          imageSrc="/villa1.jpg"
        />
        <DesignWorkCard
          title="Interior Design Work"
          description="Algedra is the best interior design company in Dubai, and across
              UAE for our professionalism in interior design in Dubai and Abu
              Dhabi. Awarded for elegant and unique projects, we are among the
              top interior design companies in Dubai, UAE. Our services are
              created by experience interior designers in Dubai, specializing in
              luxury interiors."
          imageSrc="/villa2.jpeg"
          reversed
        />
        <DesignWorkCard
          title="Interior Design Work"
          description="Algedra is the best interior design company in Dubai, and across
              UAE for our professionalism in interior design in Dubai and Abu
              Dhabi. Awarded for elegant and unique projects, we are among the
              top interior design companies in Dubai, UAE. Our services are
              created by experience interior designers in Dubai, specializing in
              luxury interiors."
          imageSrc="/villa3.jpg"
        />
      </div>
    </div>
  )
}

export default OurDesignWorkSection
