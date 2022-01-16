import React from "react";
import banner from "../../assets/img/pioneirosBanner.jpg";
import imagemPioneiro from "../../assets/img/15.png";
import { Button } from "reactstrap";
export default class Pioneiros extends React.Component {
  render() {
    return (
      <>
        <div className="sectionRamo fadeIn">
          <h2 className="header slideLeft"> Ramo Pioneiro</h2>
          <img src={banner} className="ramoImg" alt="" />
          <br />
          <br />
          <div
            style={{ alignItems: "justify", justifyContent: "center" }}
            className="sectionText"
          >
            <div className="row">
              <div className="col">
                <p style={{ textAlign: "justify" }}>
                  {" "}
                  A partir dos 18 anos, e até os 21 incompletos, integramos o
                  Ramo Pioneiro. Nossa equipe forma o clã, e é onde nos apoiamos
                  e descobrimos interesses em comum. Levamos a sério nosso lema
                  “Servir”, já que vivemos uma aventura que não é mais simbólica
                  ou imaginária, pois experimentamos o papel real do adulto por
                  meio do serviço e das atividades de desenvolvimento
                  comunitário. O cotidiano no clã nos dá bastante liberdade, mas
                  já estamos cientes da responsabilidade que isso traz – somos
                  nós que organizamos nossas próprias atividades. Esse é o
                  período em que entramos na vida adulta, e estamos concluindo a
                  formação de nossos valores e princípios.{" "}
                </p>
              </div>
              <br />

              <div className=" buttons col">
                <Button
                  onClick={() => {
                    window.open(
                      "https://www.youtube.com/watch?v=ZsJrDGnBLdw",
                      "_blank"
                    );
                  }}
                  className="btnPioneiros "
                >
                  Conheça o ramo Pioneiro
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      "https://escoteiros.org.br/campo-escola-virtual/",
                      "_blank"
                    );
                  }}
                  className="btnPioneiros "
                >
                  Educação a distância{" "}
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      "https://escoteiros.org.br/insignias-do-ramo-pioneiro/",
                      "_blank"
                    );
                  }}
                  className="btnPioneiros "
                >
                  Insígnias
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      "https://escoteiros.org.br/especialidades/",
                      "_blank"
                    );
                  }}
                  className="btnPioneiros "
                >
                  Especialidades
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      "https://www.escoteiros.org.br/wp-content/uploads/2020/07/Fluxogramas_de_progressa%CC%83o_ramo_pioneiro.pdf",
                      "_blank"
                    );
                  }}
                  className="btnPioneiros "
                >
                  Fluxograma Progressão Pessoal
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      "https://www.youtube.com/watch?v=wLCJu56qoW8",
                      "_blank"
                    );
                  }}
                  className="btnPioneiros "
                >
                  {" "}
                  Tutorial mAPPa
                </Button>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <p style={{ textAlign: "justify" }}>
                  Mesmo estando no clã, já podemos participar como adultos
                  voluntários em outros Ramos atuar ativamente em nossas
                  comunidades. Prestes a completar 21 anos, é chegada a hora de
                  encerrar nossa caminhada como jovem no Movimento Escoteiro. A
                  Cerimônia de Partida marca essa etapa, que pode ser seguida
                  pela vida escoteira no papel de voluntário, como escotista ou
                  dirigente..{" "}
                </p>
              </div>
            </div>
            <div className="row jangal">
              <div className="col">
                <img src={imagemPioneiro} style={{ marginTop: "8vw" }} alt="" />
              </div>
              <br />
              <br />
              <div className="col ">
                <h1> O Projeto Pioneiro</h1>
                <p style={{ textAlign: "justify" }}>
                  Como pioneiro, você simboliza um trajeto de muito aprendizado
                  e superação, independente de quando tenha entrado no Movimento
                  Escoteiro. Suas experiências, erros e conquistas fazem toda a
                  diferença agora – observando seu caminho percorrido, você
                  deverá reconhecer suas competências e as áreas em que precisa
                  crescer ainda mais. Para isso, existe um percurso a ser
                  percorrido: conquistar as Insígnias de Cidadania e do
                  Comprometimento, revisar seu projeto de vida, e desenvolver um
                  projeto pessoal que tenha duração superior a quatro meses e
                  que possua todas as etapas propostas. Como consequência do seu
                  desenvolvimento, é possível chegar à Insígnia de BP,
                  representando todas as vivências e etapas que você cumpriu no
                  Ramo Pioneiro. Aproveite seu período no Ramo Pioneiro e
                  prepare-se, em breve você poderá proporcionar a outros jovens
                  uma experiência tão incrível quanto a sua!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ display: "none" }}
          className="sectionRamo ramoResponsivo fadeIn"
        >
          <h2 className="header slideLeft"> Ramo Pioneiro</h2>
          <img
            src={banner}
            style={{ width: "90vw", marginLeft: "6vw", marginTop: "3vw" }}
            className="ramoImg"
            alt=""
          />
          <br />
          <div className=" buttons col">
            <Button
              onClick={() => {
                window.open(
                  "https://www.youtube.com/watch?v=ZsJrDGnBLdw",
                  "_blank"
                );
              }}
              className="btnPioneiros"
            >
              Conheça o ramo Pioneiro
            </Button>{" "}
            <Button
              onClick={() => {
                window.open(
                  "https://escoteiros.org.br/campo-escola-virtual/",
                  "_blank"
                );
              }}
              className="btnPioneiros "
            >
              Educação a distância{" "}
            </Button>
            <Button
              onClick={() => {
                window.open(
                  "https://escoteiros.org.br/insignias-do-ramo-pioneiro/",
                  "_blank"
                );
              }}
              className="btnPioneiros"
            >
              Insígnias
            </Button>
            <Button
              onClick={() => {
                window.open(
                  "https://escoteiros.org.br/especialidades/",
                  "_blank"
                );
              }}
              className="btnPioneiros"
            >
              Especialidades
            </Button>
            <Button
              onClick={() => {
                window.open(
                  "https://www.escoteiros.org.br/wp-content/uploads/2020/07/Fluxogramas_de_progressa%CC%83o_ramo_pioneiro.pdf",
                  "_blank"
                );
              }}
              className="btnPioneiros"
            >
              Fluxograma Progressão Pessoal
            </Button>
            <Button
              onClick={() => {
                window.open(
                  "https://www.youtube.com/watch?v=wLCJu56qoW8",
                  "_blank"
                );
              }}
              className="btnPioneiros"
            >
              {" "}
              Tutorial mAPPa
            </Button>
          </div>
          <br />{" "}
          <div
            style={{ alignItems: "justify", justifyContent: "center" }}
            className="sectionText"
          >
            <div className="col">
              <p style={{ textAlign: "justify" }}>
                {" "}
                A partir dos 18 anos, e até os 21 incompletos, integramos o Ramo
                Pioneiro. Nossa equipe forma o clã, e é onde nos apoiamos e
                descobrimos interesses em comum. Levamos a sério nosso lema
                “Servir”, já que vivemos uma aventura que não é mais simbólica
                ou imaginária, pois experimentamos o papel real do adulto por
                meio do serviço e das atividades de desenvolvimento comunitário.
                O cotidiano no clã nos dá bastante liberdade, mas já estamos
                cientes da responsabilidade que isso traz – somos nós que
                organizamos nossas próprias atividades. Esse é o período em que
                entramos na vida adulta, e estamos concluindo a formação de
                nossos valores e princípios.{" "}
              </p>
            </div>
            <br />
            <br />{" "}
            <p>
              <div className="leiResponsivoText">
                Mesmo estando no clã, já podemos participar como adultos
                voluntários em outros Ramos atuar ativamente em nossas
                comunidades. Prestes a completar 21 anos, é chegada a hora de
                encerrar nossa caminhada como jovem no Movimento Escoteiro. A
                Cerimônia de Partida marca essa etapa, que pode ser seguida pela
                vida escoteira no papel de voluntário, como escotista ou
                dirigente..{" "}
              </div>
            </p>{" "}
            <br />
            <hr className="dividerResponsive" />
            <br />
            <div className="col">
              <img
                src={imagemPioneiro}
                style={{ height: "45vh", width: "80vw", marginBottom: "5vh" }}
                alt=""
              />
            </div>
            <div className="col ">
              <h1> O Projeto Pioneiro</h1>
              <p style={{ textAlign: "justify" }}>
                Como pioneiro, você simboliza um trajeto de muito aprendizado e
                superação, independente de quando tenha entrado no Movimento
                Escoteiro. Suas experiências, erros e conquistas fazem toda a
                diferença agora – observando seu caminho percorrido, você deverá
                reconhecer suas competências e as áreas em que precisa crescer
                ainda mais. Para isso, existe um percurso a ser percorrido:
                conquistar as Insígnias de Cidadania e do Comprometimento,
                revisar seu projeto de vida, e desenvolver um projeto pessoal
                que tenha duração superior a quatro meses e que possua todas as
                etapas propostas. Como consequência do seu desenvolvimento, é
                possível chegar à Insígnia de BP, representando todas as
                vivências e etapas que você cumpriu no Ramo Pioneiro. Aproveite
                seu período no Ramo Pioneiro e prepare-se, em breve você poderá
                proporcionar a outros jovens uma experiência tão incrível quanto
                a sua!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
