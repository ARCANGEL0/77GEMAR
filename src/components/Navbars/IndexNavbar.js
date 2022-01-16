import React, { useState } from "react";
import logo from "../../assets/img/logoEscoteiro2.png";
import escoteiro from "../../assets/img/escoteiro.png";
import { useHistory } from "react-router-dom";
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

  const history = useHistory();

  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <img
            src={logo}
            style={
              navFixed
                ? {
                    width: "80px",
                    height: "80px",
                    marginRight: "15px",
                    marginLeft: "-3vw",
                    marginTop: "-16px",
                  }
                : {
                    width: "110px",
                    height: "110px",
                    marginRight: "15px",
                    marginLeft: "-3vw",
                    marginTop: "-16px",
                  }
            }
            alt="logo"
          />

          <NavbarBrand
            style={{ fontSize: "20px", marginTop: "-10px" }}
            id="navbar-brand"
          >
            77º Grupo Escoteiros do Mar <br />
            Jair Mattenauer Silveira
          </NavbarBrand>
        </div>
        <Nav navbar>
          <NavItem>
            <Button
              className="nav-link d-none d-lg-block"
              color="default"
              onClick={() => {
                history.push("/");
              }}
            >
              <i className="fa fa-home" /> Início
            </Button>
          </NavItem>

          <NavItem>
            <UncontrolledDropdown>
              <DropdownToggle
                className="nav-link d-none d-lg-block"
                color="default"
              >
                <img
                  alt="escotismo"
                  src={escoteiro}
                  style={{ width: 20, height: 18 }}
                />{" "}
                Escotismo
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => {
                    history.push("/Historia");
                  }}
                >
                  História e BP
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem
                  onClick={() => {
                    history.push("/Promessa");
                  }}
                >
                  Lei e Promessa Escoteira
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem
                  onClick={() => {
                    history.push("/Valores");
                  }}
                >
                  Métodos e valores escoteiros
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() => {
                    history.push("/Ramos");
                  }}
                >
                  Ramos
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>

          <NavItem>
            <UncontrolledDropdown>
              <DropdownToggle
                className="nav-link d-none d-lg-block"
                color="default"
              >
                <i className="fa fa-users" />
                Nosso grupo
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => {
                    history.push("/Sede");
                  }}
                >
                  Nossa sede
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() => {
                    history.push("/Diretoria");
                  }}
                >
                  Diretoria
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>

          <NavItem>
            <Button
              className="nav-link d-none d-lg-block"
              color="default"
              onClick={() => {
                window.open(
                  "https://www.facebook.com/gemarjairmattenauer/photos/?ref=&tab=album",
                  "_blank"
                );
              }}
            >
              <i className="fa fa-images" /> Galeria
            </Button>
          </NavItem>

          <NavItem>
            <Button
              className="nav-link d-none d-lg-block"
              color="default"
              onClick={() => {
                history.push("/Contato");
              }}
            >
              <i className="fa fa-envelope" /> Contato
            </Button>
          </NavItem>
        </Nav>
      </Container>
      <div className="emblema">
        <img style={{ height: "10vh", width: "10vw" }} src={emblema} alt="" />
      </div>
    </Navbar>
  );
}
