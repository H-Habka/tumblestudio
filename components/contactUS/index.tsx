import ContactForm from "./contactForm"

export default function ConsultationForm() {
  return (
    <section id="consultation" className="border-b border-golden">
      <div className="container mx-auto px-4">
        <div className="py-20 flex flex-wrap justify-between">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h3 className="text-3xl mb-10 font-extralight">
              FREE CONSULTATION
            </h3>
            <h3 className="text-2xl mb-2 font-semibold">
              TELL US ABOUT YOUR PROJECT
            </h3>
            <h3 className="text-2xl mb-2 font-light text-creamer">
              WE WOULD LOVE TO HEAR FROM YOU
            </h3>
            <p className="text-xs font-light text-creamer max-w-md">
              Feel free to reach us via this contact form and one of our Design
              Consultants will get back to you at earliest.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
