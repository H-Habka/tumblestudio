import Image from "next/image"
import React from "react"

const Header = () => {
  return <div className="768:bg-dark-2 bg-dark-3 py-2 flex justify-center">
    <Image className="768:w-[100px] w-[70px]  768:h-[100px] h-[70px] " src="/logo2.png" alt="logo" width={100} height={100} />
  </div>
}

export default Header

