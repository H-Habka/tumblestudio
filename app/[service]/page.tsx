import GridLayout from "@/components/servicePage/gridLayout"
import { services } from "@/constants/services"
import React from "react"

const ServicePage = async ({ params }: { params: any }) => {
  const { service } = await params

  const selectedItem = services?.find((item) => item.serviceName === service)

  return (
    <div className="z-1 pt-[100px] 768:pt-[160px]">
      <div className="fixed start-0 top-0 z-[-1] h-screen w-screen bg-[url('/bg.jpg')] opacity-5"></div>
      <GridLayout
        description={selectedItem?.description || ""}
        imagesArray={selectedItem?.images}
        title={selectedItem?.title || ""}
      />
    </div>
  )
}

export default ServicePage
