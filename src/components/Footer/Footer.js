import React from "react";
import { Link } from "react-router-dom";
import Scouts from "../../assets/img/Scouts.png";
import Escoteiros from "../../assets/img/escoteirosBrasil.png";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="4">
            <Button className="footerLink" href="https://www.scout.org/">
              <img alt="scouts" className="imgfooter" src={Scouts} />
            </Button>
          </Col>

          <Col md="4">
            <center>
              {" "}
              <h3 className="title">Contato:</h3>
              <p>
                77º GEMAR Jair Mattenauer Silveira Av. Adhemar de Barros,
                473-507 &nbsp; CEP: 11430-000 – Guarujá– SP
                matternauer@gmail.com
              </p>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.instagram.com/77gemarsp/"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  Acompanhe nosso instagram
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.facebook.com/gemarjairmattenauer/"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  Siga-nos no Facebook!
                </UncontrolledTooltip>
                 <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://api.whatsapp.com/send/?phone=5513988032388"
                  id="tooltip230450877"
                  target="_blank"
                >
                  <i className="fab fa-whatsapp" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450877">
                 Mande uma mensagem pelo WhatsApp!
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="mailto:mattenauer@gmail.com"
                  id="tooltip318450378"
                  target="_blank"
                >
                  <i className="fa fa-envelope" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450378">
                  Entre em contato conosco!
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.youtube.com/channel/UCeuBbWG9WoK6llzalMW-SMg"
                  id="tooltip318450390"
                  target="_blank"
                >
                  <i className="fab fa-youtube" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450390">
                  Inscreva-se no canal!
                </UncontrolledTooltip>
              </div>
            </center>
          </Col>
          <Col md="4">
            <Button className="footerLink" href="https://escoteiros.org.br/">
              <img
                alt="escoteirosBR"
                className="imgfooter escoteiros"
                src={Escoteiros}
              />
            </Button>
          </Col>
        </Row>
        <div className="copyrightFooter">
          <center>
            Copyright @ {new Date().getFullYear()} 77º GEMAR Jair Mattenauer
            Silveira
            <br />
            <span style={{ fontSize: "8px" }}>
              Criado por{" "}
              <a
                style={{ color: "inherit" }}
                target="_blank"
                href="https://arcangelo.dev"
              >
                {" "}
                Arcangelo
              </a>
            </span>
          </center>
        </div>
      </Container>
    </footer>
  );
}
