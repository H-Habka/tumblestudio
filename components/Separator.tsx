import React from "react"

const Separator = ({ fullWidth }: { fullWidth?: boolean }) => {
  return (
    <hr
      className={`${
        fullWidth ? "w-full" : "max-w-2xl mx-auto"
      } mt-10  border-0 border-b-[1px] border-theme-opposite-2`}
    />
  )
}

export default Separator
