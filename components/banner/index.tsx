import React from "react"

const Banner = () => {
  return (
    <div>
      <div className="h-screen bg-fixed bg-cover bg-center	 bg-[url('/banner.jpg')]">
        Banner
      </div>
      <div className="flex items-center justify-center mt-10 sm:px-4">
        <div className="text-xl font-medium px-8 relative">
          <p className="text-center text-[14px]">
            We believe in luxury and we provide the most luxurious Interior
            design services in Dubai and Abu Dhabi
          </p>
          <p className="absolute animate-line-end "></p>
          <p className="absolute animate-line-start"></p>
        </div>
      </div>
    </div>
  )
}

export default Banner
