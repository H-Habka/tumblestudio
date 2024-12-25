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
    <div className="mt-20 768:mt-[120px] flex items-center justify-center flex-col">
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
      <p className="text-center text-sm font-extralight mt-6 mb-4">
        &copy; {new Date().getFullYear()} Tumble Studio. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
