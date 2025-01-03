import Image from "next/image"
import Link from "next/link"
import React from "react"

const Header = () => {
  return (
    <div className="768:bg-theme-2 bg-theme-3 ">
      <div className="py-2 flex 768:ps-6 ps-0 2xl:container 2xl:mx-auto px-4 768:justify-start justify-center">
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
      </div>
    </div>
  )
}

export default Header
