import React from "react";
import banner from "../../assets/img/lobinhosBanner.jpg";
import mogli from "../../assets/img/mogli.png";
import { Button } from "reactstrap";
export default class Lobinhos extends React.Component {
  render() {
    return (
      <>
        <div className="sectionRamo fadeIn">
          <h2 className="header slideLeft"> Ramo Lobinho</h2>
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
                  Entre os 6,5 e os 10 anos, somos lobinhos. Aprendemos muito
                  sobre a vida em meio à natureza, a viver em grupo e
                  desenvolvemos nossa socialização. “O Livro da Jângal”, que
                  retrata as aventuras de Mowgli, o menino lobo, é o marco
                  simbólico que inspira a organização do Ramo Lobinho. Juntos,
                  formamos uma alcateia, que é dividida em pequenos grupos
                  chamados matilhas. Cada matilha tem de quatro a seis lobinhos,
                  entre meninos e meninas, com os quais compartilhamos as
                  atividades durante todo o período em que ficamos nesse Ramo.
                  Com esses amigos, fazemos jogos, brincadeiras, vivemos
                  aventuras, aprendemos sobre a importância da boa ação diária e
                  ainda somos incentivados a fazer sempre o nosso Melhor
                  Possível, que é o lema dos Lobinhos e Lobinhas.{" "}
                </p>
              </div>
              <br />

              <div className=" buttons col">
                <Button
                  onClick={() => {
                    window.open(
                      "https://www.youtube.com/watch?v=W6VK6w7H95s",
                      "_blank"
                    );
                  }}
                  className="btnLobinhos"
                >
                  Conheça o ramo Lobinho
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      "https://escoteiros.org.br/insignias-do-ramo-lobinho/",
                      "_blank"
                    );
                  }}
                  className="btnLobinhos"
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
                  className="btnLobinhos"
                >
                  Especialidades
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      "https://www.escoteiros.org.br/wp-content/uploads/2020/07/Fluxogramas_de_progressa%CC%83o_ramo_lobinho.pdf",
                      "_blank"
                    );
                  }}
                  className="btnLobinhos"
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
                  className="btnLobinhos"
                >
                  {" "}
                  Tutorial mAPPa
                </Button>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              {" "}
              <h3>
                {" "}
                Temos nossa própria lei, a Lei do Lobinho, que traz cinco
                artigos:
              </h3>{" "}
              <p>
                <ul>
                  <li>O Lobinho ouve sempre os Velhos Lobos;</li>
                  <li>O Lobinho pensa primeiro no outros;</li>
                  <li>O Lobinho abre os olhos e os ouvidos;</li>
                  <li> O lobinho é limpo e está sempre alegre;</li>
                  <li>O Lobinho diz sempre a verdade.</li>
                </ul>
                Antes que possamos completar 11 anos somos encaminhados para o
                Ramo Escoteiro. Nesse período, é feita uma Cerimônia de
                Passagem, para que possamos nos despedir da alcateia.
              </p>{" "}
            </div>

            <div className="row jangal">
              <div className="col">
                <img src={mogli} style={{ marginTop: "8vw" }} alt="" />
              </div>

              <div className="col ">
                <h1> Caminho da Jângal</h1>
                <p style={{ textAlign: "justify" }}>
                  O mapa de progressão é uma forma de ajudar você a conquistar o
                  Cruzeiro do Sul, o distintivo mais importante do seu Ramo!
                  Como lobinho, você tem muitas responsabilidades, mas também
                  muita diversão pela frente. Para deixar essa caminhada mais
                  fácil, o mapa de progressão do Ramo Lobinho pode ser usado
                  para marcar todo o seu crescimento. A partir de sua entrada na
                  alcateia, o Akelá vai acompanhar seu desenvolvimento, dando
                  uma ajudinha sempre que você precisar. Ao aprender tarefas
                  simples, que são feitas no nosso dia a dia, você mostra que
                  consegue se cuidar e que sabe o quanto é importante cada um
                  fazer a sua parte. Para chegar ao Cruzeiro do Sul, há um
                  caminho que você precisa seguir – para cada item que você
                  completar, um sinalzinho deve ser feito no mapa. Isso vai
                  ajudar você e o Akelá a lembrar de todos os detalhes de sua
                  jornada. Além disso, você precisa conquistar cinco
                  especialidades, uma Insígnia de Interesse Especial, participar
                  de três acampamentos ou acantonamentos e ir na maioria dos
                  sábados de atividade no seu grupo escoteiro. Mãos à obra,
                  lobinho!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ display: "none" }}
          className="sectionRamo ramoResponsivo fadeIn"
        >
          <h2 className="header slideLeft"> Ramo Lobinho</h2>
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
                  "https://www.youtube.com/watch?v=W6VK6w7H95s",
                  "_blank"
                );
              }}
              className="btnLobinhos"
            >
              Conheça o ramo Lobinho
            </Button>
            <Button
              onClick={() => {
                window.open(
                  "https://escoteiros.org.br/insignias-do-ramo-lobinho/",
                  "_blank"
                );
              }}
              className="btnLobinhos"
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
              className="btnLobinhos"
            >
              Especialidades
            </Button>
            <Button
              onClick={() => {
                window.open(
                  "https://www.escoteiros.org.br/wp-content/uploads/2020/07/Fluxogramas_de_progressa%CC%83o_ramo_lobinho.pdf",
                  "_blank"
                );
              }}
              className="btnLobinhos"
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
              className="btnLobinhos"
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
                Entre os 6,5 e os 10 anos, somos lobinhos. Aprendemos muito
                sobre a vida em meio à natureza, a viver em grupo e
                desenvolvemos nossa socialização. “O Livro da Jângal”, que
                retrata as aventuras de Mowgli, o menino lobo, é o marco
                simbólico que inspira a organização do Ramo Lobinho. Juntos,
                formamos uma alcateia, que é dividida em pequenos grupos
                chamados matilhas. Cada matilha tem de quatro a seis lobinhos,
                entre meninos e meninas, com os quais compartilhamos as
                atividades durante todo o período em que ficamos nesse Ramo. Com
                esses amigos, fazemos jogos, brincadeiras, vivemos aventuras,
                aprendemos sobre a importância da boa ação diária e ainda somos
                incentivados a fazer sempre o nosso Melhor Possível, que é o
                lema dos Lobinhos e Lobinhas.{" "}
              </p>
            </div>
            <br />
            <br />
            <br />{" "}
            <div className="leiResponsivoHeader">
              <h3>
                {" "}
                Temos nossa própria lei, a Lei do Lobinho, que traz cinco
                artigos:
              </h3>{" "}
            </div>
            <p>
              <ul>
                <li>O Lobinho ouve sempre os Velhos Lobos;</li>
                <li>O Lobinho pensa primeiro no outros;</li>
                <li>O Lobinho abre os olhos e os ouvidos;</li>
                <li> O lobinho é limpo e está sempre alegre;</li>
                <li>O Lobinho diz sempre a verdade.</li>
              </ul>
              <div className="leiResponsivoText">
                Antes que possamos completar 11 anos somos encaminhados para o
                Ramo Escoteiro. Nesse período, é feita uma Cerimônia de
                Passagem, para que possamos nos despedir da alcateia.
              </div>
            </p>{" "}
            <br />
            <div className="col">
              <img
                src={mogli}
                style={{ height: "45vh", width: "80vw", marginBottom: "5vh" }}
                alt=""
              />
            </div>
            <div className="col ">
              <h1> Caminho da Jângal</h1>
              <p style={{ textAlign: "justify" }}>
                O mapa de progressão é uma forma de ajudar você a conquistar o
                Cruzeiro do Sul, o distintivo mais importante do seu Ramo! Como
                lobinho, você tem muitas responsabilidades, mas também muita
                diversão pela frente. Para deixar essa caminhada mais fácil, o
                mapa de progressão do Ramo Lobinho pode ser usado para marcar
                todo o seu crescimento. A partir de sua entrada na alcateia, o
                Akelá vai acompanhar seu desenvolvimento, dando uma ajudinha
                sempre que você precisar. Ao aprender tarefas simples, que são
                feitas no nosso dia a dia, você mostra que consegue se cuidar e
                que sabe o quanto é importante cada um fazer a sua parte. Para
                chegar ao Cruzeiro do Sul, há um caminho que você precisa seguir
                – para cada item que você completar, um sinalzinho deve ser
                feito no mapa. Isso vai ajudar você e o Akelá a lembrar de todos
                os detalhes de sua jornada. Além disso, você precisa conquistar
                cinco especialidades, uma Insígnia de Interesse Especial,
                participar de três acampamentos ou acantonamentos e ir na
                maioria dos sábados de atividade no seu grupo escoteiro. Mãos à
                obra, lobinho!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
