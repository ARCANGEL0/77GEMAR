import React, { useState } from "react";
import logo from "../../assets/img/logoEscoteiro2.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import emblema from "../../assets/img/emblema.png";

// reactstrap components
import {
  Button,
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  NavbarToggler,
  NavbarText,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function IndexNavbar(props) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [navFixed, setFixed] = React.useState(false);
  const [color, setColor] = React.useState("navbar-transparent");

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("navbarFixed");
      setFixed(true);
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
      setFixed(false);
    }
  };



  return (
    <div>

      <Navbar style={{ width: "100%" }} id="navbarSite" className={" fixed-top " + color} expand="lg" color-on-scroll="100">
        <img
          src={logo}
          style={
            navFixed
              ? {
                width: "45px",
                height: "45px",
                marginRight: "15px",
                marginTop: "0px",
              }
              : {
                width: "45px",
                height: "45px",
                marginRight: "15px",
                marginLeft: "0vw",
                marginTop: "0px",
              }
          }
          alt="logo"
        />
        <NavbarBrand style={{ marginLeft: '2%', fontSize: '12px', marginRight: '-5%' }}>
          77º GEMAR
          <br />
          Jair Mattenauer Silveira
        </NavbarBrand>
        <div style={{ marginRight: '-5vw' }} className="emblema">
          <img style={{ height: "5vh", width: "30vw" }} src={emblema} alt="" />
        </div>
        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} > <GiHamburgerMenu color='white' /> </NavbarToggler>

        <Collapse className="collapseNav" isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Início</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#/Historia">História </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#/Promessa">Lei e Promessa </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#/Valores">Métodos e Valores </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#/Ramos">Ramos </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#/Sede">Nossa sede </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#/Diretoria">Diretoria </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://www.facebook.com/gemarjairmattenauer/photos/?ref=&tab=album">Galeria </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#/Contato">Contato </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div >


  );
}
