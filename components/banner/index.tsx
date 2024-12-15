import React from "react"

const Banner = () => {
  return (
    <div>
      <div className="h-screen bg-fixed bg-[url('/banner.jpg')]">Banner</div>
      <div className="flex items-center justify-center mt-10">
        <div className="text-xl font-medium px-8 relative">
          <p>
            We believe in luxury and we provide the most luxurious Interior
            design services in Dubai and Abu Dhabi
          </p>
          <p className="bg-red-400 absolute animate-line-end "></p>
          <p className="bg-red-400 absolute animate-line-start"></p>
        </div>
      </div>
    </div>
  )
}

export default Banner
