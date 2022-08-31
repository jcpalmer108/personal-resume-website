import { Turn } from "hamburger-react";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import socials from "../assets/content/socials.json";
import logo from "../assets/images/logos/jennapalmer-dark.svg";
import {
  DesktopMenu,
  DesktopPages,
  Hamburger,
  Icon,
  Logo,
  LowerMenu,
  MobileMenu,
  MobilePages,
  Socials,
  SocialsWrapper,
  UpperMenu,
} from "../styles/components/Navbar";
import { redstone, tabletBreakpoint } from "../styles/variables";
import { MenuItem } from "../types/global";
import { Link, NavbarProps } from "../types/Navbar";
import Section from "./Section";

export default function Navbar({ menu }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopView, setIsDesktop] = useState(
    window.innerWidth >= tabletBreakpoint
  );

  const updateMedia = () => {
    const widerThanMenuBreakpoint = window.innerWidth >= tabletBreakpoint;
    if (isDesktopView !== widerThanMenuBreakpoint)
      setIsDesktop(widerThanMenuBreakpoint);
    if (isOpen === true && widerThanMenuBreakpoint) setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const openAnimation = useSpring<object>({
    from: {
      opacity: "0",
      maxHeight: "105px",
      overflow: "hidden",
    },
    to: {
      opacity: "1",
      maxHeight: isOpen ? `${window.innerHeight + 110}px` : "105px",
    },
    config: { duration: "300" },
  });

  return (
    <Section wide light>
      <animated.div style={openAnimation} data-testid="Navbar">
        <UpperMenu>
          <Logo src={logo} alt="logo" />
          <DesktopMenu data-testid="Desktop Menu">
            {menu.map((link: MenuItem) => (
              <DesktopPages href={`#${link.key}`} key={link.key}>
                {link.label?.toUpperCase()}
              </DesktopPages>
            ))}
          </DesktopMenu>
          <Hamburger data-testid="Hamburger">
            <Turn
              toggle={() => setIsOpen(!isOpen)}
              toggled={isOpen}
              size={20}
              color={redstone}
              duration={0.5}
            />
          </Hamburger>
        </UpperMenu>
        <LowerMenu>
          <MobileMenu data-testid="Mobile Menu">
            {menu.map((link) => (
              <MobilePages href={`#${link.key}`} key={link.key}>
                {link.label?.toUpperCase()}
              </MobilePages>
            ))}
          </MobileMenu>
          <SocialsWrapper data-testid="Socials">
            {socials.links.map((link: Link) => (
              <Socials href={link.url} key={link.key}>
                <Icon
                  src={require("../assets/images/socials/" + link.key + ".svg")}
                  alt={link.key}
                />
              </Socials>
            ))}
          </SocialsWrapper>
        </LowerMenu>
      </animated.div>
    </Section>
  );
}
