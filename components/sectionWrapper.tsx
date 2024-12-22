import React from "react"

const SectionWrapper = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <div>
      <div className="flex items-center justify-center z-20 sticky bg-dark-2 768:bg-transparent top-[80px] 768:top-[60px] py-2">
        <p className="640:text-5xl text-3xl">{title}</p>
      </div>
      {children}
    </div>
  )
}

export default SectionWrapper
