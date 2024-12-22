import React from "react"
import DesignWorkCard from "./card"
import SectionWrapper from "../sectionWrapper"

const OurDesignWorkSection = () => {
  return (
    <SectionWrapper title="OUR DESIGN WORK">
      <div className="768:mt-[80px] mt-10 flex flex-col gap-5  2xl:container 2xl:mx-auto px-4">
        <DesignWorkCard
          title="Interior Design Work"
          description="Algedra is the best interior design company in Dubai, and across
              UAE for our professionalism in interior design in Dubai and Abu
              Dhabi. Awarded for elegant and unique projects, we are among the
              top interior design companies in Dubai, UAE. Our services are
              created by experience interior designers in Dubai, specializing in
              luxury interiors."
          imageSrc="https://i.imgur.com/UfBNnVF.jpg"
        />
        <DesignWorkCard
          title="Exterior Design Work"
          description="Algedra is the best interior design company in Dubai, and across
              UAE for our professionalism in interior design in Dubai and Abu
              Dhabi. Awarded for elegant and unique projects, we are among the
              top interior design companies in Dubai, UAE. Our services are
              created by experience interior designers in Dubai, specializing in
              luxury interiors."
          imageSrc="https://i.imgur.com/SSPshoz.jpg"
          reversed
        />
        <DesignWorkCard
          title="Landscape Design Work"
          description="Algedra is the best interior design company in Dubai, and across
              UAE for our professionalism in interior design in Dubai and Abu
              Dhabi. Awarded for elegant and unique projects, we are among the
              top interior design companies in Dubai, UAE. Our services are
              created by experience interior designers in Dubai, specializing in
              luxury interiors."
          imageSrc="https://i.imgur.com/CbW8xQ4.jpg"
        />
      </div>
    </SectionWrapper>
  )
}

export default OurDesignWorkSection
