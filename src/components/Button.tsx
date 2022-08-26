import { Link, ArrowRight } from "../styles/components/Button"
import { ButtonProps } from "../types/Button";
import arrow from "../assets/images/icons/arrow-right.svg";

export default function Button({ label, url, onClick }: ButtonProps ) {
  if(!url && !onClick) {
    return null;
  }

  return (
    <div data-testid="Button" onClick={() => { if(onClick) onClick() }}>
      <Link href={url}>
        <span>{label.toUpperCase()}</span>
        <ArrowRight src={arrow} alt="arrow" />
      </Link>
    </div>
  )
}