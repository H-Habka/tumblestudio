import Image from "next/image"
import React from "react"

const Header = () => {
  return (
    <div className="768:bg-dark-2 bg-dark-3 ">
      <div className="py-2 flex 768:ps-6 ps-0 2xl:container 2xl:mx-auto px-4 768:justify-start justify-center">
        <Image
          className="768:w-[180px] w-[130px]"
          src="https://i.imgur.com/Zu78u2o.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
    </div>
  )
}

export default Header
