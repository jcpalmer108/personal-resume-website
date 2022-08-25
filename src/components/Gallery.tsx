import Section from "./Section"
import photo1 from "../assets/images/gallery/pexels-ekaterina-bolovtsova-4049791.jpg"
import photo2 from "../assets/images/gallery/pexels-ekaterina-bolovtsova-4049870.jpg"
import photo3 from "../assets/images/gallery/pexels-ekaterina-bolovtsova-4049876.jpg"
import {
  Photo,
  Wrapper,
  Inner
} from "../styles/components/Gallery"

export default function Gallery() {
  return (
    <Section wide>
      <Wrapper>
        <Inner>
          <Photo src={photo1} alt="Jenna 1" />
          <Photo src={photo2} alt="Jenna 2" />
          <Photo src={photo3} alt="Jenna 3" />
        </Inner>
      </Wrapper>
    </Section>
  )
}