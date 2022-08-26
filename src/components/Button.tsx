import { Link, ArrowRight } from "../styles/components/Button"
import arrow from "../assets/images/icons/arrow-right.svg";
import { ButtonProps } from "../types/Button";

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