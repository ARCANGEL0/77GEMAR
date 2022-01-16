import React from "react";
import escoteiro from "../assets/img/escoteiroBoneco.png";
import uniao from "../assets/img/uniao.png";
import social from "../assets/img/logoSocial.png";
import promessa from "../assets/img/promessa.png";
import desenvolvimento from "../assets/img/desenvolvimento.png";
import atividade from "../assets/img/atividade.png";

import equipe from '../assets/img/grupo.png'
import estudo from '../assets/img/estudos.png'

export default class Historia extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div style={{ marginTop: "25vh" }} id="valores" className="main">
            <h3 className="header slideLeft">Métodos e valores escoteiros</h3>
            <div className="valoresContainer">
              <div className="principios fadeIn">
                <center>
                  <h3>Princípios do Escotismo</h3>
                </center>
                <p>
                  A Organização Mundial do Movimento Escoteiro (WOSM) define
                  como Princípios do Escotismo:
                </p>
                <br />
                <br />
                <div className="valoresText row">
                  <div className="col">
                    <h4>
                      Dever para com Deus (crença e vivência de uma fé,
                      independentemente de qual seja).
                    </h4>
                    <p>
                      Convidamos os jovens a ir além do mundo material, a
                      orientar suas vidas por princípios espirituais e a seguir
                      caminhando em busca de Deus, presente na experiência de
                      todos os dias, na criação, no próximo, na história. Além
                      disso, nós os convidamos a viver sua fé com alegria, sem
                      nenhuma hostilidade para com aqueles que buscam, encontram
                      ou vivem respostas diferentes diante de Deus, abrindo-se
                      ao interesse, à compreensão e ao diálogo com todas as
                      opções religiosas.
                    </p>
                  </div>
                  <div className="col">
                    <img
                      style={{
                        width: "45%",
                        height: "80%",
                        marginLeft: "10vw",
                      }}
                      src={uniao}
                      alt="uniao"
                    />
                  </div>
                </div>
                <br />

                <div className="valoresText row">
                  <div className="col">
                    <img
                      style={{
                        width: "45%",
                        height: "80%",
                        marginLeft: "10vw",
                      }}
                      src={escoteiro}
                      alt="escoteiros"
                    />
                  </div>
                  <div className="col">
                    <h4>
                      Dever para com os outros (participação na sociedade, boa
                      ação, serviço ao próximo).
                    </h4>
                    <p>
                      Propomos aos jovens respeitar com carinho o mundo natural,
                      comprometer-se com o desenvolvimento sustentável e
                      participar ativamente dos esforços para sua preservação e
                      renovação. Entendemos que o ser humano só se realiza
                      plenamente quando exerce sua liberdade respeitando a do
                      próximo. Propomos aos jovens que busquem sua realização
                      por meio do serviço ao próximo e que se integrem de
                      maneira responsável e solidária à sua comunidade. No plano
                      das relações pessoais, nós os convidamos a desenvolver sua
                      afetividade com naturalidade e respeito, pautando pelo
                      amor seu comportamento sexual.
                    </p>
                  </div>
                </div>

                <div className="valoresText row">
                  <div className="col">
                    <h4>
                      Dever para consigo próprio (crescimento saudável e auto
                      desenvolvimento).
                    </h4>
                    <p>
                      Convidamos os jovens a usar progressivamente sua
                      liberdade, a assumir-se com responsabilidade, a aprender a
                      discernir e decidir, enfrentando as consequências de suas
                      decisões e de seus atos. Nós lhes propomos que sejam
                      fortes, mantendo-se firmes em seus objetivos e tendo
                      coragem de ser autênticos, em um claro testemunho de que
                      são e o que dizem ser.
                    </p>
                  </div>
                  <div className="col">
                    <img
                      style={{
                        width: "75%",
                        height: "100%",
                        marginLeft: "9vw",
                        marginTop: "-5vw",
                      }}
                      src={social}
                      alt="social"
                    />
                  </div>
                </div>
                <br />
              </div>

              <br />

              <hr className="divider" />
              <br />
              <div className="metodos fadeIn">
                <center>
                  <h3>Método escoteiro</h3>
                </center>
                <p>
                  O Método Escoteiro é um sistema de progressão que tem a
                  intenção de estimular as capacidades e interesses de cada
                  jovem. Isso acontece através de desafios a serem superados, da
                  vivência de aventuras, do incentivo à exploração, a realização
                  de descobertas, a experimentar coisas novas, inventar e
                  desenvolver a capacidade para encontrar soluções; mas sempre
                  respeitando individualmente os limites de cada jovem.Esse
                  sistema de progressão depende da combinação de cinco elementos
                  para ocorrer:
                </p>
                <br />
                <br />
                <div className="valoresText row">
                  <div className="col">
                    <img
                      style={{
                        width: "25%",
                        height: "60%",
                        marginLeft: "15vw",
                        marginTop: '8vh'
                      }}
                      src={desenvolvimento}
                      alt="desenvolvimento"
                    />
                  </div>

                  <div className="col">
                    <h4>Desenvolvimento pessoal com orientação individual</h4>
                    <p>
                      A evolução de cada jovem é acompanhada individualmente por
                      um adulto voluntário, que identifica suas qualidades e
                      deficiências a fim de orientá-lo da melhor forma, criando
                      oportunidades para que ele se desenvolva e se supere cada
                      vez mais. Além disso, o voluntário e o jovem criam uma
                      relação de amizade e confiança, o que permite identificar
                      e trabalhar pontos comportamentais com mais facilidade.
                    </p>
                  </div>
                </div>
                <br />

                <div className="valoresText row">
                  <div className="col">
                    <img
                      style={{
                        width: "25%",
                        height: "30%",
                        marginLeft: "15vw",
                        marginTop: '10vw'

                      }}
                      src={atividade}
                      alt="atividade"
                    />
                  </div>
                  <div className="col">
                    <h4>Atividades progressivas, atraentes e variadas</h4>
                    <p>
                      "É por meio das atividades que alcançamos nosso propósito,
                      que podemos oferecer aos jovens experiências únicas e
                      agregadoras. Para que isso aconteça durante toda a vida
                      escoteira, é necessário que sejam observadas as
                      características, anseios e necessidades de cada faixa
                      etária, resultando assim, em um planejamento próprio para
                      cada Ramo, assegurando o interesse e envolvimento do
                      escoteiro. Os jovens vão ao grupo para se divertir ao lado
                      de amigos; nós utilizamos as atividades para auxiliá-los
                      em seu autodesenvolvimento e educação. A programação
                      dessas atividades leva em conta um sistema progressivo, em
                      termos de exigência de práticas, habilidades e
                      amadurecimento, oferecendo desafios e aventuras conforme
                      sua evolução e vivência. Através de jogos e capacitação
                      técnica estimuladas por um sistema de distintivos, vida ao
                      ar livre, integração com a comunidade, entre outros.
                    </p>
                  </div>
                </div>

                <br />
                <br />
                <br />

                <div className="valoresText row">
                  <div className="col">
                    <img
                      style={{
                        width: "45%",
                        height: "100%",
                        marginLeft: "13vw",
                        marginTop: "-5vw",
                      }}
                      src={estudo}
                      alt="estudo"
                    />
                  </div>

                  <div className="col">
                    <img
                      style={{
                        width: "45%",
                        height: "100%",
                        marginLeft: "13vw",
                        marginTop: "-5vw",

                      }}
                      src={equipe}
                      alt="equipe"
                    />
                  </div>
                </div>

                <div className="valoresText row">
                  <div className="col">
                    <h4>Aprender fazendo</h4>
                    <p>
                      O aprendizado pela prática é uma das bases do Movimento
                      Escoteiro. Os jovens são incentivados a desenvolverem suas
                      habilidades pela ação, valorizando o treinamento para
                      autonomia baseado na autoconfiança e iniciativa,
                      observando os erros como parte da jornada, fonte de
                      aprendizagem, já que são um passo em busca do acerto.
                    </p>
                  </div>
                  <div className="col">
                    <h4>Vida em equipe</h4>
                    <p>
                      Desde o ingresso em um grupo escoteiro, a vida em equipe
                      passa a fazer parte da realidade do escoteiro. Esse
                      convívio possibilita a descoberta progressiva de
                      responsabilidade e prepara o autocontrole, além de
                      desenvolver a capacidade tanto para liderar quanto para
                      cooperar.
                    </p>
                  </div>
                </div>
                <br /><br />
                <div className="valoresText row">
                  <img
                    style={{
                      marginLeft: "30vw",
                    }}
                    className="promessa"

                    src={promessa}
                    alt="promessa"
                  />
                </div>
                <div className="valoresText row">
                  <div className="col">
                    <h4>Aceitação da Lei e da Promessa Escoteira</h4>
                    <p>
                      A aceitação da Lei e da Promessa são feitas
                      voluntariamente, este prevê um compromisso de vida com um
                      código de ética e de comportamento. A partir desse momento
                      espera-se um esforço para viver de acordo com seus
                      significados.
                    </p>
                  </div>
                </div>
                <br />
              </div>
            </div>

            <div style={{ display: 'none' }} className="valoresContainer valoresContainerResponsivo">
              <div className="principios fadeIn">
                <center>
                  <h3>Princípios do Escotismo</h3>
                </center>
                <p>
                  A Organização Mundial do Movimento Escoteiro (WOSM) define
                  como Princípios do Escotismo:
                </p>
                <br />
                <br />

                <div className="col">
                  <h4>
                    Dever para com Deus (crença e vivência de uma fé,
                    independentemente de qual seja).
                  </h4><img
                    style={{
                      width: "45%",
                      height: "80%",
                      marginLeft: "25vw",
                      marginBottom: '2vw'
                    }}
                    src={uniao}
                    alt="uniao"
                  />
                  <br /><br />
                  <p>
                    Convidamos os jovens a ir além do mundo material, a
                    orientar suas vidas por princípios espirituais e a seguir
                    caminhando em busca de Deus, presente na experiência de
                    todos os dias, na criação, no próximo, na história. Além
                    disso, nós os convidamos a viver sua fé com alegria, sem
                    nenhuma hostilidade para com aqueles que buscam, encontram
                    ou vivem respostas diferentes diante de Deus, abrindo-se
                    ao interesse, à compreensão e ao diálogo com todas as
                    opções religiosas.
                  </p>
                </div>


                <br />


                <div className="col">
                  <h4>
                    Dever para com os outros (participação na sociedade, boa
                    ação, serviço ao próximo).
                  </h4>
                  <img
                    style={{
                      width: "45%",
                      height: "80%",
                      marginLeft: "25vw",
                      marginBottom: '2vw'
                    }}
                    src={escoteiro}
                    alt="escoteiros"
                  />
                  <p>
                    Propomos aos jovens respeitar com carinho o mundo natural,
                    comprometer-se com o desenvolvimento sustentável e
                    participar ativamente dos esforços para sua preservação e
                    renovação. Entendemos que o ser humano só se realiza
                    plenamente quando exerce sua liberdade respeitando a do
                    próximo. Propomos aos jovens que busquem sua realização
                    por meio do serviço ao próximo e que se integrem de
                    maneira responsável e solidária à sua comunidade. No plano
                    das relações pessoais, nós os convidamos a desenvolver sua
                    afetividade com naturalidade e respeito, pautando pelo
                    amor seu comportamento sexual.
                  </p>
                </div>

                <br /><br />
                <div className="col">
                  <h4>
                    Dever para consigo próprio (crescimento saudável e auto
                    desenvolvimento).
                  </h4> <img
                    style={{
                      width: "85%",
                      height: "80%",
                      marginLeft: "7vw",
                      marginBottom: '2vw'
                    }}
                    src={social}
                    alt="social"
                  />
                  <p>
                    Convidamos os jovens a usar progressivamente sua
                    liberdade, a assumir-se com responsabilidade, a aprender a
                    discernir e decidir, enfrentando as consequências de suas
                    decisões e de seus atos. Nós lhes propomos que sejam
                    fortes, mantendo-se firmes em seus objetivos e tendo
                    coragem de ser autênticos, em um claro testemunho de que
                    são e o que dizem ser.
                  </p>
                </div>
                <div className="col">

                </div>

                <br />
              </div>

              <br />

              <hr className="divider" />
              <br />
              <div className="metodos fadeIn">
                <center>
                  <h3>Método escoteiro</h3>
                </center>
                <p>
                  O Método Escoteiro é um sistema de progressão que tem a
                  intenção de estimular as capacidades e interesses de cada
                  jovem. Isso acontece através de desafios a serem superados, da
                  vivência de aventuras, do incentivo à exploração, a realização
                  de descobertas, a experimentar coisas novas, inventar e
                  desenvolver a capacidade para encontrar soluções; mas sempre
                  respeitando individualmente os limites de cada jovem.Esse
                  sistema de progressão depende da combinação de cinco elementos
                  para ocorrer:
                </p>
                <br />
                <br />

                <div className="col">

                </div>

                <div className="col">
                  <h4>Desenvolvimento pessoal com orientação individual</h4> <img
                    style={{
                      width: "45%",
                      height: "80%",
                      marginLeft: "25vw",
                      marginBottom: '2vw'
                    }}
                    src={desenvolvimento}
                    alt="desenvolvimento"
                  />
                  <p>
                    A evolução de cada jovem é acompanhada individualmente por
                    um adulto voluntário, que identifica suas qualidades e
                    deficiências a fim de orientá-lo da melhor forma, criando
                    oportunidades para que ele se desenvolva e se supere cada
                    vez mais. Além disso, o voluntário e o jovem criam uma
                    relação de amizade e confiança, o que permite identificar
                    e trabalhar pontos comportamentais com mais facilidade.
                  </p>
                </div>

                <br />

                <div className="col">

                </div>
                <div className="col">
                  <h4>Atividades progressivas, atraentes e variadas</h4><img
                    style={{
                      width: "45%",
                      height: "80%",
                      marginLeft: "25vw",
                      marginBottom: '2vw'

                    }}
                    src={atividade}
                    alt="atividade"
                  />
                  <p>
                    "É por meio das atividades que alcançamos nosso propósito,
                    que podemos oferecer aos jovens experiências únicas e
                    agregadoras. Para que isso aconteça durante toda a vida
                    escoteira, é necessário que sejam observadas as
                    características, anseios e necessidades de cada faixa
                    etária, resultando assim, em um planejamento próprio para
                    cada Ramo, assegurando o interesse e envolvimento do
                    escoteiro. Os jovens vão ao grupo para se divertir ao lado
                    de amigos; nós utilizamos as atividades para auxiliá-los
                    em seu autodesenvolvimento e educação. A programação
                    dessas atividades leva em conta um sistema progressivo, em
                    termos de exigência de práticas, habilidades e
                    amadurecimento, oferecendo desafios e aventuras conforme
                    sua evolução e vivência. Através de jogos e capacitação
                    técnica estimuladas por um sistema de distintivos, vida ao
                    ar livre, integração com a comunidade, entre outros.
                  </p>
                </div>


                <br />


                <div className="col">
                  <h4>Aprender fazendo</h4>  <img
                    style={{
                      width: "45%",
                      height: "80%",
                      marginLeft: "25vw",
                      marginBottom: '2vw'

                    }}
                    src={estudo}
                    alt="estudo"
                  />
                  <p>
                    O aprendizado pela prática é uma das bases do Movimento
                    Escoteiro. Os jovens são incentivados a desenvolverem suas
                    habilidades pela ação, valorizando o treinamento para
                    autonomia baseado na autoconfiança e iniciativa,
                    observando os erros como parte da jornada, fonte de
                    aprendizagem, já que são um passo em busca do acerto.
                  </p>
                </div><br />
                <div className="col">
                  <h4>Vida em equipe</h4>    <img
                    style={{
                      width: "45%",
                      height: "80%",
                      marginLeft: "25vw",
                      marginBottom: '2vw'

                    }}
                    src={equipe}
                    alt="equipe"
                  />
                  <p>
                    Desde o ingresso em um grupo escoteiro, a vida em equipe
                    passa a fazer parte da realidade do escoteiro. Esse
                    convívio possibilita a descoberta progressiva de
                    responsabilidade e prepara o autocontrole, além de
                    desenvolver a capacidade tanto para liderar quanto para
                    cooperar.
                  </p>
                </div>

                <br /><br />
                <div className="valoresText row">
                  <img
                    style={{
                      marginLeft: "30vw",
                    }}
                    className="promessa"

                    src={promessa}
                    alt="promessa"
                  />
                </div>
                <div className="valoresText row">
                  <div className="col">
                    <h4>Aceitação da Lei e da Promessa Escoteira</h4>
                    <p>
                      A aceitação da Lei e da Promessa são feitas
                      voluntariamente, este prevê um compromisso de vida com um
                      código de ética e de comportamento. A partir desse momento
                      espera-se um esforço para viver de acordo com seus
                      significados.
                    </p>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
