import React from "react";
import Section from "./Section";
import { Image, Menu, Wrapper } from "@/styles/components/Navbar";
import logo from "../assets/images/jennapalmer-dark.svg";

export default function NavBar() {
  return (
    <Section wide light>
      <Wrapper>
        <Image src={logo} alt="logo" />
        <Menu>
          <div>blah</div>
        </Menu>
      </Wrapper>
    </Section>
  )
}