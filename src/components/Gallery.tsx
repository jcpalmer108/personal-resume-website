import { Inner, Photo, Wrapper } from "../styles/components/Gallery";
import { GalleryProps } from "../types/Gallery";
import Section from "./Section";

export default function Gallery({ photos }: GalleryProps) {
  if (photos && photos?.length < 3) {
    return null;
  }

  return (
    <Section wide>
      <Wrapper>
        <Inner data-testid="Gallery">
          {photos?.slice(0, 3).map((photo, index) => (
            <Photo
              key={`Photo ${index + 1}`}
              src={require("../assets/images/gallery/" + photo + ".jpg")}
              alt={`Photo ${index + 1}`}
            />
          ))}
        </Inner>
      </Wrapper>
    </Section>
  );
}
