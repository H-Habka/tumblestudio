import React from "react"
import ServicesCard from "./card"

const OurServicesSection = () => {
  return (
    <div>
      <div className="flex items-center justify-center sticky z-10 top-[80px] 768:top-[140px] bg-dark-2 py-2">
        <p className="640:text-5xl text-3xl bg-dark-2 ">OUR SERVICES</p>
      </div>
      {/* <div className="768:mt-[100px] mt-10 flex flex-col gap-5 640:px-10 768:px-20 px-4"> */}
      <div className="grid grid-cols-1 768:mt-[80px] mt-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:container 2xl:mx-auto px-4">
        <ServicesCard title="Interior Design Work" imageSrc="/villa1.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa2.jpeg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa3.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa1.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa3.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa2.jpeg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa1.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa3.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa3.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa2.jpeg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa1.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa3.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa3.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa2.jpeg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa3.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa1.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa2.jpeg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa3.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa1.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa3.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa2.jpeg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa1.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa3.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa2.jpeg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa1.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa3.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa2.jpeg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa3.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa1.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa2.jpeg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa3.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa2.jpeg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa1.jpg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa2.jpeg" />
        <ServicesCard title="Interior Design Work" imageSrc="/villa3.jpg" />
      </div>
    </div>
  )
}

export default OurServicesSection
