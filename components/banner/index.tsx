import React from "react"

const Banner = () => {
  return (
    <div id="home">
      <div className="768:h-screen h-[70vh] bg-cover bg-center	 bg-[url('https://i.imgur.com/9oxKcIQ.jpeg')]"></div>
      <div className="flex items-center justify-center mt-10 sm:px-4">
        <div className="text-xl font-medium px-8 relative">
          <p className="text-center text-[14px]">
            We believe in design and luxury to offer the finest architectural
            design services worldwide.
          </p>
          <p className="absolute animate-line-end "></p>
          <p className="absolute animate-line-start"></p>
        </div>
      </div>
    </div>
  )
}

export default Banner
