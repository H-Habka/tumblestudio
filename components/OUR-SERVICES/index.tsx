import React from "react"
import ServicesCard from "./card"
import SectionWrapper from "../sectionWrapper"
import { services } from "@/constants/services"

const OurServicesSection = () => {
  return (
    <SectionWrapper sectionId="services" title="OUR SERVICES">
      <div className="grid grid-cols-1 768:mt-[80px] mt-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:container 2xl:mx-auto px-4">
        {services?.map((item) => {
          return (
            <ServicesCard
              href={item.serviceName}
              title={item.title}
              imageSrc={item?.mainImage}
              key={item?.serviceName}
            />
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default OurServicesSection
