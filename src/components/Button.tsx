import React from "react";
import { Link, ArrowRight } from "../styles/components/Button"
import arrow from "../assets/images/arrow-right.svg";

type ButtonProps = {
  label: string,
  url: string,
}

export default function Button({ label, url }: ButtonProps ) {
  return (
    <Link href={url}>
      <span>{label}</span>
      <ArrowRight src={arrow} alt="arrow" />
    </Link>
  )
}