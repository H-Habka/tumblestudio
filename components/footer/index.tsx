import React from "react"

const links: {
  title: string
  name: string
}[] = [
  {
    title: "Home",
    name: "home",
  },
  {
    title: "Design Work",
    name: "design_work",
  },
  {
    title: "Services",
    name: "services",
  },
]

const Footer = () => {
  return (
    <footer className="mt-20 768:mt-[100px] flex items-center justify-center flex-col">
      <div className="flex gap-8">
        {links?.map((item) => {
          return (
            <a
              href={`#${item.name}`}
              key={item.name}
              className="text-lg font-medium text-theme-opposite-3 brightness-75 hover:brightness-150 hover:text-theme-opposite-1 transition-all duration-200 hover:-translate-y-1"
            >
              {item.title}
            </a>
          )
        })}
      </div>
      {/* <p className="text-center text-sm font-extralight mt-6 mb-4">
        &copy; {new Date().getFullYear()} Tumble Studio. All rights reserved.
      </p> */}
      <div className="mt-3 text-center cursor-default mb-4">
        <ul className="flex flex-wrap justify-center mt-2 space-x-4 text-xs [&>li:hover]:underline">
          <li>Abu Dhabi</li>
          <li>Dubai</li>
          <li>Sharjah</li>
          <li>Al Ain</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
