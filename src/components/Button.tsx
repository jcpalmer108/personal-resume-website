import React from "react";
import { Link, ArrowRight } from "../styles/components/Button"
import arrow from "../assets/images/arrow-right.svg";

import { ButtonProps } from "../types/Button";

export default function Button({ label, url, onClick }: ButtonProps ) {
  return (
    <div onClick={() => { if(onClick) onClick() }}>
      <Link href={url} data-testid="Button">
        <span>{label.toUpperCase()}</span>
        <ArrowRight src={arrow} alt="arrow" />
      </Link>
    </div>
  )
}