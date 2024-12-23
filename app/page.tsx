import Banner from "@/components/banner"
import ConsultationForm from "@/components/contactUS"
import OurDesignWorkSection from "@/components/OUR-DESIGN-WORK-SECTION"
import OurServicesSection from "@/components/OUR-SERVICES"
import Separator from "@/components/Separator"

export default function Home() {
  return (
    <div className="mb-[200px]">
      <Banner />
      <div className="mt-20">
        <OurDesignWorkSection />
      </div>
      <Separator />
      <div className="mt-20">
        <OurServicesSection />
      </div>
      <div>
        <ConsultationForm />
      </div>
    </div>
  )
}
