import Link from "next/link"
import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"

const navItems = [
  { title: "Contact", to: "test2" },
  { title: "About Me", to: "test2asds" },
]

const Navbar = () => {
  return (
    <div>
      <div className="items-center gap-4 hidden 768:flex">
        {navItems.map((item) => (
          <Link
            className="hover:text-yellow-500 relative transition-all before:transition-all before:duration-200 duration-200 before:bottom-0 before:start-0 before:h-[1px] hover:before:w-full before:w-0 before:bg-red-700 before:absolute"
            href={item.to}
            key={item.to}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="768:hidden block">
        <label className="peer">
          <GiHamburgerMenu />
          <input type="checkbox" name="GiHamburgerMenu" className="hidden" />
        </label>
        <div className="-translate-x-full peer-has-[:checked]:translate-x-0 transition-all duration-200 bg-theme-2 h-screen w-screen  top-[82px] fixed start-0 ">
          <div className="flex flex-col gap-4 px-6 mt-8">
            {navItems.map((item) => (
              <Link href={item.to} key={item.to}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
