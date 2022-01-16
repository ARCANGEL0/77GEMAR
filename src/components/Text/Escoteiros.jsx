import React from "react";
import banner from "../../assets/img/escoteirosBanner.jpg";
import sempreAlerta from "../../assets/img/sempreAlerta.png";
import { Button } from "reactstrap";
export default class Escoteiros extends React.Component {
  render() {
    return (
      <>
        <div className="sectionRamo fadeIn">
          <h2 className="header slideLeft"> Ramo Escoteiro</h2>
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
                  Entre os 11 e 14 anos fazemos parte do Ramo Escoteiro – somos
                  patrulhas de 5 a 8 jovens, de meninos e meninas, que juntas
                  formam uma tropa. Aqui, além de trabalhar em equipe e entender
                  a importância de respeitar a natureza, aprendemos diversas
                  coisas que nos deixam mais confiantes e decididos. Cada
                  patrulha tem seu próprio bastão e bandeirola, onde gravamos
                  lembranças marcantes das nossas experiências juntos, assim
                  como o livro de patrulha, que tem todas as informações sobre
                  os membros e fotografias das nossas ações. Elegemos um
                  monitor, que age como um líder dentro de nosso grupo, e
                  desenvolvemos algumas atividades por conta própria, como ir ao
                  campo, ao cinema, jogar algum jogo, etc.{" "}
                </p>
              </div>
              <br />

              <div className=" buttons col">
                <Button
                  onClick={() => {
                    window.open(
                      "https://www.youtube.com/watch?v=GWZnPtCSres",
                      "_blank"
                    );
                  }}
                  className="btnEscoteiros"
                >
                  Conheça o ramo Escoteiro
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      "https://escoteiros.org.br/insignias-do-ramo-escoteiro/",
                      "_blank"
                    );
                  }}
                  className="btnEscoteiros"
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
                  className="btnEscoteiros"
                >
                  Especialidades
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      "https://www.escoteiros.org.br/wp-content/uploads/2020/07/Fluxogramas_de_progressa%CC%83o_ramo_escoteiro.pdf",
                      "_blank"
                    );
                  }}
                  className="btnEscoteiros"
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
                  className="btnEscoteiros"
                >
                  {" "}
                  Tutorial mAPPa
                </Button>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p style={{ textAlign: "justify" }}>
                  Atividades como acampamentos e excursões fazem parte da nossa
                  vivência no Ramo Escoteiro, sempre com a orientação de
                  adultos. Com nosso lema “Sempre Alerta”, estamos interessados
                  em explorar novos territórios, conhecer coisas novas, sempre
                  com o nosso grupo de amigos. Antes de completar 15 anos,
                  passamos por um período de transição em que nos adaptamos à
                  realidade do Ramo Sênior, e nos despedimos da tropa escoteira
                  com a Cerimônia de Passagem.{" "}
                </p>
              </div>
            </div>
            <br />
            <br />

            <div className="row jangal">
              <div className="col">
                <img src={sempreAlerta} style={{ marginTop: "8vw" }} alt="" />
              </div>

              <div className="col ">
                <h1> Aventura Escoteira</h1>
                <p style={{ textAlign: "justify" }}>
                  No Ramo Escoteiro você realiza tantas atividades que anotar
                  todas elas facilita bastante na hora de conquistar sua Lis de
                  Ouro! Para isso, você tem duas ferramentas bem simples à sua
                  disposição: o mapa de progressão e o aplicativo de Progressão
                  do Ramo Escoteiro – os dois servem para marcar as atividades
                  realizadas durante sua “Aventura Escoteira”. Cada item que
                  você completa significa que você está um passo mais perto do
                  distintivo de Escoteiro Lis de Ouro. E não é só isso, você
                  mostra para seu chefe e amigos o quanto você é responsável e
                  capaz de se virar em todo tipo de situação; ao ver você se
                  desenvolvendo tão rapidamente, seus companheiros de patrulha
                  vão querer o mesmo e você vai poder ajudá-los! Deixe seu chefe
                  por dentro de todas as suas conquistas: ele poderá dar uma
                  mãozinha quando você precisar. Além do trajeto que está no
                  mapa, você vai precisar tirar pelo menos uma Insígnia de
                  Interesse Especial, ter o cordão de eficiência vermelho e
                  branco, ter 10 noites de acampamento com sua patrulha ou tropa
                  e conquistar uma das Insígnias da Modalidade do Ramo
                  Escoteiro. Mas esteja “Sempre Alerta”, depois de tudo isso,
                  você ainda precisa de uma indicação da Corte de Honra e do
                  Escotista. Conquistar a Lis de Ouro mostra que você se
                  divertiu muito, mas também se desenvolveu demais. Mãos à obra,
                  Escoteiro?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ display: "none" }}
          className="sectionRamo ramoResponsivo fadeIn"
        >
          <h2 className="header slideLeft"> Ramo Escoteiro</h2>
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
                  "https://www.youtube.com/watch?v=GWZnPtCSres",
                  "_blank"
                );
              }}
              className="btnEscoteiros"
            >
              Conheça o ramo Escoteiro
            </Button>{" "}
            <Button
              onClick={() => {
                window.open(
                  "https://escoteiros.org.br/insignias-do-ramo-escoteiro/",
                  "_blank"
                );
              }}
              className="btnEscoteiros"
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
              className="btnEscoteiros"
            >
              Especialidades
            </Button>
            <Button
              onClick={() => {
                window.open(
                  "https://www.escoteiros.org.br/wp-content/uploads/2020/07/Fluxogramas_de_progressa%CC%83o_ramo_escoteiro.pdf",
                  "_blank"
                );
              }}
              className="btnEscoteiros"
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
              className="btnEscoteiros"
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
                Entre os 11 e 14 anos fazemos parte do Ramo Escoteiro – somos
                patrulhas de 5 a 8 jovens, de meninos e meninas, que juntas
                formam uma tropa. Aqui, além de trabalhar em equipe e entender a
                importância de respeitar a natureza, aprendemos diversas coisas
                que nos deixam mais confiantes e decididos. Cada patrulha tem
                seu próprio bastão e bandeirola, onde gravamos lembranças
                marcantes das nossas experiências juntos, assim como o livro de
                patrulha, que tem todas as informações sobre os membros e
                fotografias das nossas ações. Elegemos um monitor, que age como
                um líder dentro de nosso grupo, e desenvolvemos algumas
                atividades por conta própria, como ir ao campo, ao cinema, jogar
                algum jogo, etc.{" "}
              </p>
            </div>
            <br />
            <br />{" "}
            <p>
              <div className="leiResponsivoText">
                Atividades como acampamentos e excursões fazem parte da nossa
                vivência no Ramo Escoteiro, sempre com a orientação de adultos.
                Com nosso lema “Sempre Alerta”, estamos interessados em explorar
                novos territórios, conhecer coisas novas, sempre com o nosso
                grupo de amigos. Antes de completar 15 anos, passamos por um
                período de transição em que nos adaptamos à realidade do Ramo
                Sênior, e nos despedimos da tropa escoteira com a Cerimônia de
                Passagem.{" "}
              </div>
            </p>{" "}
            <br />
            <hr className="dividerResponsive" />
            <br />
            <div className="col">
              <img
                src={sempreAlerta}
                style={{
                  height: "45vh",
                  width: "80vw",
                  marginBottom: "5vh",
                  marginLeft: "4.5%",
                }}
                alt=""
              />
            </div>
            <div className="col ">
              <h1>Aventura Escoteira</h1>
              <p style={{ textAlign: "justify" }}>
                No Ramo Escoteiro você realiza tantas atividades que anotar
                todas elas facilita bastante na hora de conquistar sua Lis de
                Ouro! Para isso, você tem duas ferramentas bem simples à sua
                disposição: o mapa de progressão e o aplicativo de Progressão do
                Ramo Escoteiro – os dois servem para marcar as atividades
                realizadas durante sua “Aventura Escoteira”. Cada item que você
                completa significa que você está um passo mais perto do
                distintivo de Escoteiro Lis de Ouro. E não é só isso, você
                mostra para seu chefe e amigos o quanto você é responsável e
                capaz de se virar em todo tipo de situação; ao ver você se
                desenvolvendo tão rapidamente, seus companheiros de patrulha vão
                querer o mesmo e você vai poder ajudá-los! Deixe seu chefe por
                dentro de todas as suas conquistas: ele poderá dar uma mãozinha
                quando você precisar. Além do trajeto que está no mapa, você vai
                precisar tirar pelo menos uma Insígnia de Interesse Especial,
                ter o cordão de eficiência vermelho e branco, ter 10 noites de
                acampamento com sua patrulha ou tropa e conquistar uma das
                Insígnias da Modalidade do Ramo Escoteiro. Mas esteja “Sempre
                Alerta”, depois de tudo isso, você ainda precisa de uma
                indicação da Corte de Honra e do Escotista. Conquistar a Lis de
                Ouro mostra que você se divertiu muito, mas também se
                desenvolveu demais. Mãos à obra, Escoteiro?
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
