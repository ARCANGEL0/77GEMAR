import React from "react";
import { BiTime, BiEnvelope } from "react-icons/bi";
import { FaFacebook, FaMapMarkerAlt, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
export default class Contato extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div style={{ marginTop: "25vh" }} id="historia" className="main">
            <h3 className="header slideLeft">Contato</h3>
            <div className="contatoContainer">
              <center>
                <h2>
                  77º GRUPO ESCOTEIROS DO MAR <br />
                  JAIR MATTENAUER SILVEIRA
                </h2>
              </center>

              <div className="contato_info row">
                <div className="contato_links col">
                  <div className="row">
                    <div style={{ marginLeft: "0px" }} className="row">
                      <h3>
                        {" "}
                        <BiTime /> &nbsp; Horários:{" "}
                      </h3>
                    </div>
                    <br />
                    <div
                      style={{ marginLeft: "-30%", marginTop: "6.5%" }}
                      className="row"
                    >
                      <h4>Domingos das 09:00 às 13:00</h4>
                    </div>
                  </div>{" "}
                  <br />
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open(
                        "https://www.facebook.com/gemarjairmattenauer/",
                        "_blank"
                      );
                    }}
                    className="row"
                  >
                    <h3>
                      {" "}
                      <FaFacebook /> &nbsp; Facebook
                    </h3>
                  </div>
                  <br />
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open(
                        "https://www.instagram.com/77gemarsp/",
                        "_blank"
                      );
                    }}
                    className="row"
                  >
                    <h3>
                      {" "}
                      <RiInstagramLine /> &nbsp; Instagram
                    </h3>
                  </div>
                  <br />
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open(
                        "https://api.whatsapp.com/send/?phone=5513988032388",
                        "_blank"
                      );
                    }}
                    className="row"
                  >
                    <h3>
                      {" "}
                      <FaWhatsapp /> &nbsp; WhatsApp
                    </h3>
                  </div>
                  <br />
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open("mailto:mattenauer@gmail.com", "_blank");
                    }}
                    className="row"
                  >
                    <h3>
                      {" "}
                      <BiEnvelope /> &nbsp; Email
                    </h3>
                  </div>
                  <br />
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open(
                        "https://www.youtube.com/channel/UCeuBbWG9WoK6llzalMW-SMg",
                        "_blank"
                      );
                    }}
                    className="row"
                  >
                    <h3>
                      {" "}
                      <FaYoutube /> &nbsp; Youtube
                    </h3>
                  </div>
                  <br />
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open(
                        "https://goo.gl/maps/nChuVRFjXi7wBZry6",
                        "_blank"
                      );
                    }}
                    className="row"
                  >
                    <h3>
                      {" "}
                      <FaMapMarkerAlt /> &nbsp; Endereço
                    </h3>
                  </div>
                </div>

                <div className="contato_mapa col">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3645.1328217892733!2d-46.2685729!3d-23.9910864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1fe203f554411%3A0x993fe70601887520!2s77%20Grupo%20Escoteiro%20do%20Mar%20Jair%20Mattenauer%20Silveira!5e0!3m2!1spt-BR!2sjp!4v1642121662563!5m2!1spt-BR!2sjp"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <br />
              <br />
            </div>

            <div style={{ display: 'none' }} className="contatoContainer contatoContainerResponsivo">
              <center>
                <h2>
                  77º GRUPO ESCOTEIROS DO MAR <br />
                  JAIR MATTENAUER SILVEIRA
                </h2>
              </center>

              <div className="contato_info row">
                <div className="contato_links col">
                  <div className="row horario_row">
                    <div className="row ">
                      <h3>

                        <BiTime /> &nbsp; Horários:
                      </h3>
                    </div>
                    <br />
                    <div
                      className="row horarioSpan"
                    >
                      <h4>Domingos <br /> das 09:00 às 13:00</h4>
                    </div>
                  </div>{" "}
                  <br />
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open(
                        "https://www.facebook.com/gemarjairmattenauer/",
                        "_blank"
                      );
                    }}
                    className="row"
                  >
                    <h3>
                      {" "}
                      <FaFacebook /> &nbsp; Facebook
                    </h3>
                  </div>
                  <br />
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open(
                        "https://www.instagram.com/77gemarsp/",
                        "_blank"
                      );
                    }}
                    className="row"
                  >
                    <h3>
                      {" "}
                      <RiInstagramLine /> &nbsp; Instagram
                    </h3>
                  </div>
                  <br />
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open(
                        "https://api.whatsapp.com/send/?phone=5513988032388",
                        "_blank"
                      );
                    }}
                    className="row"
                  >
                    <h3>
                      {" "}
                      <FaWhatsapp /> &nbsp; WhatsApp
                    </h3>
                  </div>
                  <br />
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open("mailto:mattenauer@gmail.com", "_blank");
                    }}
                    className="row"
                  >
                    <h3>
                      {" "}
                      <BiEnvelope /> &nbsp; Email
                    </h3>
                  </div>
                  <br />
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open(
                        "https://www.youtube.com/channel/UCeuBbWG9WoK6llzalMW-SMg",
                        "_blank"
                      );
                    }}
                    className="row"
                  >
                    <h3>
                      {" "}
                      <FaYoutube /> &nbsp; Youtube
                    </h3>
                  </div>
                  <br />
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open(
                        "https://goo.gl/maps/nChuVRFjXi7wBZry6",
                        "_blank"
                      );
                    }}
                    className="row"
                  >
                    <h3>
                      {" "}
                      <FaMapMarkerAlt /> &nbsp; Endereço
                    </h3>
                  </div>
                </div>

                <div className="contato_mapa col">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3645.1328217892733!2d-46.2685729!3d-23.9910864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1fe203f554411%3A0x993fe70601887520!2s77%20Grupo%20Escoteiro%20do%20Mar%20Jair%20Mattenauer%20Silveira!5e0!3m2!1spt-BR!2sjp!4v1642121662563!5m2!1spt-BR!2sjp"
                    width="300"
                    height="300"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <br />
              <br />
            </div>
          </div>
        </div>
      </>
    );
  }
}
