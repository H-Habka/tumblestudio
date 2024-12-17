import Banner from "@/components/banner"
import ContactDetailsBar from "@/components/contactDetailsBar"
import Header from "@/components/header"
import OurDesignWorkSection from "@/components/OUR-DESIGN-WORK-SECTION"

export default function Home() {
  return (
    <div className="mb-[200px]">
      <div className="fixed z-10 top-0 left-0 w-full">
        <div className="640:block hidden">
          <ContactDetailsBar />
        </div>
        <Header />
      </div>
      <div className="640:hidden fixed bottom-0 w-full start-0 z-10">
        <ContactDetailsBar />
      </div>
      <Banner />
      <div className="mt-20">
        <OurDesignWorkSection />
      </div>
    </div>
  )
}
