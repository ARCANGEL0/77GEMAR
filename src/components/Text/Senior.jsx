import React from "react";
import banner from "../../assets/img/seniorBanner.jpg";
import insignias from "../../assets/img/insignias.png";
import { Button } from "reactstrap";
export default class Senior extends React.Component {
  render() {
    return (
      <>
        <div className="sectionRamo fadeIn">
          <h2 className="header slideLeft"> Ramo Sênior</h2>
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
                  O Ramo Sênior é formado por jovens com idade entre 15 e 17
                  anos. Nós já nos conhecemos melhor, aceitamos nossas
                  características e as diferenças de um jeito mais simples, e
                  estamos entendendo melhor nossa própria personalidade. Aqui a
                  exploração se converte em desafios pessoais e somos
                  estimulados a superar estes desafios. Nossas atividades nos
                  desafiam e nos encorajam a superar dificuldades, seja
                  escalando montanhas, navegando, conhecendo novas tecnologias,
                  acampando por vários dias, fazendo trilhas, aprendendo novas
                  habilidades e muitas outras coisas.Como diz nosso lema,
                  estamos Sempre Alerta a tudo que acontece ao nosso redor.{" "}
                </p>
              </div>
              <br />

              <div className=" buttons col">
                <Button
                  onClick={() => {
                    window.open(
                      "https://www.youtube.com/watch?v=dCrE2AQqkAA",
                      "_blank"
                    );
                  }}
                  className="btnSenior"
                >
                  Conheça o ramo Sênior
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      "https://escoteiros.org.br/insignias-do-ramo-senior/",
                      "_blank"
                    );
                  }}
                  className="btnSenior"
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
                  className="btnSenior"
                >
                  Especialidades
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      "https://www.escoteiros.org.br/wp-content/uploads/2020/07/Fluxogramas_de_progressa%CC%83o_ramo_se%CC%82nior.pdf",
                      "_blank"
                    );
                  }}
                  className="btnSenior"
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
                  className="btnSenior"
                >
                  {" "}
                  Tutorial mAPPa
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p style={{ textAlign: "justify" }}>
                  Temos nossa patrulha, um grupo de amigos que vivenciam conosco
                  experiências inesquecíveis e nos apoiam nos momentos de
                  dificuldades. A partir do momento que completamos 17 anos, e
                  no máximo antes dos 18, precisamos nos despedir da tropa
                  sênior e partir para o Ramo Pioneiro, após uma Cerimônia de
                  Passagem.{" "}
                </p>
              </div>
            </div>{" "}
            <br />
            <br />
            <div className="row jangal">
              <div className="col">
                <img src={insignias} style={{ marginTop: "8vw" }} alt="" />
              </div>

              <div className="col ">
                <h1> O Desafio Sênior</h1>
                <p style={{ textAlign: "justify" }}>
                  São tantas as aventuras que você vive no Ramo Sênior, você
                  aprende a superar obstáculos, medos, se desafia e se supera
                  constantemente – sempre acompanhado dos amigos. Sua caminhada,
                  se realizada com dedicação, vai levar você diretamente para o
                  Escoteiro da Pátria, o distintivo especial do seu Ramo. Para
                  acompanhar essa jornada, você tem à mão o mapa de progressão e
                  o aplicativo de Progressão do Ramo Sênior, em que você pode
                  registrar todas as suas conquistas e acompanhar em que áreas
                  você precisa se desenvolver ainda mais. Como parte do seu
                  desafio, você ainda vai precisar de 10 noites acampado com sua
                  patrulha ou tropa do Ramo Sênior, conquistar o cordão dourado,
                  uma das Insígnias de Interesse Especial e uma das Insígnias da
                  Modalidade do seu atual Ramo. Capriche, seu Escotista e a
                  Corte de Honra também vão ter que indicar você para alcançar o
                  Escoteiro da Pátria. Supere seus próprios desafios! Essa é a
                  hora!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ display: "none" }}
          className="sectionRamo ramoResponsivo fadeIn"
        >
          <h2 className="header slideLeft"> Ramo Sênior</h2>
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
                  "https://www.youtube.com/watch?v=dCrE2AQqkAA",
                  "_blank"
                );
              }}
              className="btnSenior"
            >
              Conheça o ramo Sênior
            </Button>{" "}
            <Button
              onClick={() => {
                window.open(
                  "https://escoteiros.org.br/insignias-do-ramo-senior/",
                  "_blank"
                );
              }}
              className="btnSenior"
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
              className="btnSenior"
            >
              Especialidades
            </Button>
            <Button
              onClick={() => {
                window.open(
                  "https://www.escoteiros.org.br/wp-content/uploads/2020/07/Fluxogramas_de_progressa%CC%83o_ramo_se%CC%82nior.pdf",
                  "_blank"
                );
              }}
              className="btnSenior"
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
              className="btnSenior"
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
                O Ramo Sênior é formado por jovens com idade entre 15 e 17 anos.
                Nós já nos conhecemos melhor, aceitamos nossas características e
                as diferenças de um jeito mais simples, e estamos entendendo
                melhor nossa própria personalidade. Aqui a exploração se
                converte em desafios pessoais e somos estimulados a superar
                estes desafios. Nossas atividades nos desafiam e nos encorajam a
                superar dificuldades, seja escalando montanhas, navegando,
                conhecendo novas tecnologias, acampando por vários dias, fazendo
                trilhas, aprendendo novas habilidades e muitas outras
                coisas.Como diz nosso lema, estamos Sempre Alerta a tudo que
                acontece ao nosso redor.{" "}
              </p>
            </div>
            <br />
            <br />{" "}
            <p>
              <div className="leiResponsivoText">
                Temos nossa patrulha, um grupo de amigos que vivenciam conosco
                experiências inesquecíveis e nos apoiam nos momentos de
                dificuldades. A partir do momento que completamos 17 anos, e no
                máximo antes dos 18, precisamos nos despedir da tropa sênior e
                partir para o Ramo Pioneiro, após uma Cerimônia de Passagem.{" "}
              </div>
            </p>{" "}
            <br />
            <hr className="dividerResponsive" />
            <br />
            <div className="col">
              <img
                src={insignias}
                style={{ height: "45vh", width: "80vw", marginBottom: "5vh" }}
                alt=""
              />
            </div>
            <div className="col ">
              <h1> O Desafio Sênior</h1>
              <p style={{ textAlign: "justify" }}>
                São tantas as aventuras que você vive no Ramo Sênior, você
                aprende a superar obstáculos, medos, se desafia e se supera
                constantemente – sempre acompanhado dos amigos. Sua caminhada,
                se realizada com dedicação, vai levar você diretamente para o
                Escoteiro da Pátria, o distintivo especial do seu Ramo. Para
                acompanhar essa jornada, você tem à mão o mapa de progressão e o
                aplicativo de Progressão do Ramo Sênior, em que você pode
                registrar todas as suas conquistas e acompanhar em que áreas
                você precisa se desenvolver ainda mais. Como parte do seu
                desafio, você ainda vai precisar de 10 noites acampado com sua
                patrulha ou tropa do Ramo Sênior, conquistar o cordão dourado,
                uma das Insígnias de Interesse Especial e uma das Insígnias da
                Modalidade do seu atual Ramo. Capriche, seu Escotista e a Corte
                de Honra também vão ter que indicar você para alcançar o
                Escoteiro da Pátria. Supere seus próprios desafios! Essa é a
                hora!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
