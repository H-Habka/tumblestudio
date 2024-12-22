import React from "react"

const Banner = () => {
  return (
    <div>
      <div className="h-screen bg-fixed bg-cover bg-center	 bg-[url('https://i.imgur.com/9oxKcIQ.jpeg')]">
        Banner
      </div>
      <div className="flex items-center justify-center mt-10 sm:px-4">
        <div className="text-xl font-medium px-8 relative">
          <p className="text-center text-[14px]">
            We believe in beauty and comfort. we provide the most luxurious
            Interior design services around the world
          </p>
          <p className="absolute animate-line-end "></p>
          <p className="absolute animate-line-start"></p>
        </div>
      </div>
    </div>
  )
}

export default Banner
