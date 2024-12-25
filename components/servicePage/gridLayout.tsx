import { splitTextRandomly } from "@/helpers"
import Image from "next/image"

const GridLayout = ({
  imagesArray,
  title,
  description,
}: {
  imagesArray: any
  description: string
  title: string
}) => {
  const splittedText = splitTextRandomly(description, 8, 12)
  return (
    <div className="pb-10">
      <p className="text-center text-3xl 768:text-4xl 1230:5xl mb-8 1230:sticky 1230:top-[65px] z-20 px-2 640:px-4 w-fit mx-auto">
        {title}
      </p>
      <div className="flex justify-center px-10">
        <div className="hidden 768:block min-w-[370px] text-lg text-center  bg-opacity-50 ">
          {splittedText.map((line, index) => (
            <p key={index} className="styled-line">
              {line}
            </p>
          ))}
        </div>
        <div className="block 768:hidden min-w-[370px] text-lg text-center  bg-opacity-50 ">
          {description}
        </div>
      </div>
      <div className="mt-10 2xl:container 2xl:mx-auto px-4 grid grid-cols-1 640:grid-cols-3 gap-4 [&>*]:rounded-xl 640:[&>img:nth-child(2n)]:row-span-2 640:[&>img:nth-child(2n)]:col-span-2 640:[&>img:nth-child(6n)]:row-span-1 640:[&>img:nth-child(6n)]:col-span-1 ">
        {imagesArray.map((item: any) => {
          return (
            <Image
              className="w-full h-full"
              src={item}
              key={item}
              alt={item}
              height={800}
              width={800}
            />
          )
        })}
      </div>
    </div>
  )
}

export default GridLayout
