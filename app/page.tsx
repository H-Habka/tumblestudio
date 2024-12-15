import Banner from "@/components/banner"
import ContactDetailsBar from "@/components/contactDetailsBar"
import Header from "@/components/header"
import OurDesignWorkSection from "@/components/OUR-DESIGN-WORK-SECTION"

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full">
        <ContactDetailsBar />
        <Header />
      </div>
      <Banner />
      <div className="mt-20">
        <OurDesignWorkSection />
      </div>
    </div>
  )
}
