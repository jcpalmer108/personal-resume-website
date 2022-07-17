import React, { useEffect, useState } from "react";
import Section from "./Section";
import { Image, Menu, TopBar, menuBreakpoint, MobileMenu } from "@/styles/components/Navbar";
import logo from "../assets/images/jennapalmer-dark.svg";
import { redstone } from "@/styles/variables";
import { Turn as Hamburger } from 'hamburger-react';
import socials from '../assets/content/socials.json';

type Link = {
  key: string,
  label: string,
  url: string,
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(true)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= menuBreakpoint)

  // closes mobile menu on desktop view
  const updateMedia = () => {
    const isWider = window.innerWidth >= menuBreakpoint;

    if(isDesktop !== isWider) {
      setIsDesktop(isWider)
      console.log(isWider)
    }

    if(isOpen === true && isWider) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  return (
    <Section wide light>
      <TopBar>
        <Image src={logo} alt="logo" />
        <Menu>
          {
            isDesktop ? (
              <div>blah</div>
            ) : (
              <Hamburger
                toggle={() => setIsOpen(!isOpen)}
                toggled={isOpen}
                size={20}
                color={redstone}
                duration={0.5}
              />
            )
          }
        </Menu>
      </TopBar>
      <MobileMenu>
        {
          socials.links && socials.links.map((link: Link) => (
            <a href={link.url} key={link.key}>
              <img src={require("../assets/images/" + link.key + ".svg")} alt={link.key} />
            </a>
          ))
        }
      </MobileMenu>
    </Section>
  )
}