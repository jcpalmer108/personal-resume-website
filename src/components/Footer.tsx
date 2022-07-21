import { 
  Logo, 
  Wrapper, 
  FooterMenu, 
  FooterPages, 
  Copyright, 
  Name
} from '../styles/components/Footer';
import Section from './Section';
import logo from '../assets/images/jennapalmer-light.svg';
import { FooterProps } from '../types/Footer';
import { MenuItem } from '../types/global';
import SeparatingLine from './SeparatingLine';

export default function Footer({ menu }: FooterProps) {
  return (

    <>
      <Section thin wide>
        <Wrapper>
          <Logo src={logo}/>
          <FooterMenu>
            {menu.map((link: MenuItem) => (
              <FooterPages href={`#${link.key}`} key={link.key}>
                {link.label.toUpperCase()}
              </FooterPages>
            ))}
          </FooterMenu>
        </Wrapper>
      </Section>
      <SeparatingLine thin/>
      <Section thin>
        <Copyright>COPYRIGHT &copy; ALL RIGHTS RESERVED BY <Name>JENNA PALMER</Name></Copyright>
      </Section>    
    </>

  )
}