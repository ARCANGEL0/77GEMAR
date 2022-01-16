import React from "react";
import lobinho from "../assets/img/lobinhoLogo.png";
import escoteiro from "../assets/img/escoteiroLogo.png";
import senior from "../assets/img/seniorLogo.png";
import pioneiro from "../assets/img/pioneiroLogo.png";
import RamosText from "components/Text/Ramos";
import Lobinhos from "components/Text/Lobinhos";
import Escoteiros from "components/Text/Escoteiros";
import Senior from "components/Text/Senior";
import Pioneiros from "components/Text/Pioneiros";
import { Button } from "reactstrap";
export default class Ramos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "index",
      index: true,
    };
  }

  mudarTexto(ramo) {
    if (ramo !== "index") {
      this.setState({
        index: false,
      });
    }

    this.setState({
      page: ramo,
    });
  }

  voltar() {
    this.setState({
      page: "index",
      index: true,
    });
  }
  renderSwitch(param) {
    switch (param) {
      case "index":
        return <RamosText />;
      case "lobinhos":
        return <Lobinhos voltar={this.voltar} />;
      case "escoteiros":
        return <Escoteiros />;
      case "senior":
        return <Senior />;
      case "pioneiro":
        return <Pioneiros />;
      default:
        return "";
    }
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <div style={{ marginTop: "25vh" }} id="ramos" className="main">
            <h3
              className="header slideLeft"
              onClick={() => this.mudarTexto("index")}
            >
              Ramos
            </h3>
            <div className="ramosContainer  row">
              <div className="ramosText fadeIn col-8">
                {this.state.index ? (
                  ""
                ) : (
                  <Button className="voltarBtn" onClick={() => this.voltar()}>
                    Voltar
                  </Button>
                )}{" "}
                {this.renderSwitch(this.state.page)}
                <br />
                <br />
              </div>

              <div className=" ramos slideRight col">
                <div className="row">
                  <img
                    src={lobinho}
                    alt="lobinho"
                    onClick={() => this.mudarTexto("lobinhos")}
                  />
                </div>
                <div className="row">
                  <img
                    src={escoteiro}
                    alt="escoteiro"
                    onClick={() => this.mudarTexto("escoteiros")}
                  />
                </div>
                <div className="row">
                  <img
                    src={senior}
                    alt="senior"
                    onClick={() => this.mudarTexto("senior")}
                  />
                </div>

                <div className="row">
                  <img
                    src={pioneiro}
                    alt="pioneiro"
                    onClick={() => this.mudarTexto("pioneiro")}
                  />
                </div>
              </div>
            </div>

            <div
              style={{ display: "none" }}
              className="ramosContainer ramosContainerResponsivo  row"
            >
              <div className="ramosText fadeIn col-8"></div>
              <div className=" ramos slideRight row">
                <div className="">
                  <img
                    style={{
                      width: "30%",
                      height: "80%",
                      marginLeft: "-38%",
                      marginRight: "5%",
                    }}
                    src={lobinho}
                    alt="lobinho"
                    onClick={() => this.mudarTexto("lobinhos")}
                  />

                  <img
                    style={{ width: "30%", height: "80%", marginRight: "5%" }}
                    src={escoteiro}
                    alt="escoteiro"
                    onClick={() => this.mudarTexto("escoteiros")}
                  />

                  <img
                    style={{ width: "30%", height: "80%", marginRight: "5%" }}
                    src={senior}
                    alt="senior"
                    onClick={() => this.mudarTexto("senior")}
                  />

                  <img
                    style={{ width: "30%", height: "90%" }}
                    src={pioneiro}
                    alt="pioneiro"
                    onClick={() => this.mudarTexto("pioneiro")}
                  />
                </div>
              </div>
              {this.state.index ? (
                ""
              ) : (
                <div className="voltarButton">
                  <Button className="voltarBtn" onClick={() => this.voltar()}>
                    Voltar
                  </Button>
                </div>
              )}{" "}
              {this.renderSwitch(this.state.page)}
            </div>
          </div>
        </div>
      </>
    );
  }
}
