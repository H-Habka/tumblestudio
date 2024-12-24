import React from "react"
import DesignWorkCard from "./card"
import SectionWrapper from "../sectionWrapper"

const OurDesignWorkSection = () => {
  return (
    <SectionWrapper title="OUR DESIGN WORK">
      <div className="768:mt-[80px] mt-10 flex flex-col gap-5  2xl:container 2xl:mx-auto px-4">
        <DesignWorkCard
          title="Interior Design Work"
          description="At Tumble Studio, we define interior design as the art and science of transforming spaces into environments that inspire, function seamlessly, and reflect individuality. 
          Interior design combines creative vision, expert space planning, and a deep understanding of materials and styles to enhance the way you live, work, or play. At Tumble, we believe every space tells a story, and we are passionate about helping you craft yours—whether it’s a cozy home, an efficient workspace, or an inviting commercial environment."
          imageSrc="https://i.imgur.com/UfBNnVF.jpg"
        />
        <DesignWorkCard
          title="Architectural Design Work"
          description="At Tumble studio , architectural design is the foundation of creating structures that are not only visually striking but also functional, sustainable, and in harmony with their surroundings. It’s the art and science of designing buildings and spaces that respond to human needs while considering the environment, culture, and innovation.
          Tumble Studio architectural designs aim to create inspiring spaces that balance aesthetics, efficiency, and purpose."
          imageSrc="https://i.imgur.com/SSPshoz.jpg"
          reversed
        />
        <DesignWorkCard
          title="Landscape Design Work"
          description="At Tumble Studio, landscape design is more than arranging plants and pathways—it’s the art of crafting outdoor spaces that blend natural beauty, functionality, and sustainability. Our approach to landscape design transforms gardens, yards, and open spaces into stunning environments that reflect your vision while enhancing the harmony between nature and architecture."
          imageSrc="https://i.imgur.com/CbW8xQ4.jpg"
        />
      </div>
    </SectionWrapper>
  )
}

export default OurDesignWorkSection
