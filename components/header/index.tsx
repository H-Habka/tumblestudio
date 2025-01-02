import Image from "next/image"
import Link from "next/link"
import React from "react"
import Navbar from "./navbar"

const Header = () => {
  return (
    <div className="768:bg-theme-2 bg-theme-3 z-1 relative ">
      <div className="opacity-30  absolute  w-full h-full bg-[url('/bg2.jpg')] bg-center "></div>
      <div className="py-2 relative flex 768:ps-6 ps-0 2xl:container 2xl:mx-auto px-4 768:justify-between justify-center  items-center">
        <Link className="z-20" href="/">
          <Image
            className="768:w-[180px] w-[130px] dark-logo"
            src="https://i.imgur.com/Zu78u2o.png"
            alt="logo"
            width={100}
            height={100}
          />
          <Image
            className="768:w-[180px] w-[130px] light-logo "
            src="https://i.imgur.com/sUx8Ihx.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="768:static absolute end-6">
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default Header
