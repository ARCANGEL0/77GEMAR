import React from "react";

import bpowell from "../assets/img/bpowell.jpg";

export default class Historia extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div style={{ marginTop: "25vh" }} id="historia" className="main">
            <h3 className="header slideLeft">
              História do Escotismo e seu fundador BP
            </h3>
            <div className="historiacontainer">
              <div className="historiatext fadeIn">
                <p>
                  O Movimento Escoteiro foi fundado em 1907 pelo General Robert
                  Stephenson Smith Baden-Powell, na Inglaterra. Sem pretender
                  trazer a rigidez militar para o Movimento Escoteiro,
                  Baden-Powell aproveitou os elementos positivos de fomento à
                  camaradagem, iniciativa, coragem e autodisciplina, bem como
                  técnicas que seriam úteis no desenvolvimento dos jovens para
                  criar um movimento educacional. Baden-Powell utilizou-se dos
                  saberes e habilidades que aprendeu no serviço militar em
                  lugares agrestes da índia e da África, quando se tornou
                  conhecido como “Impisa”, (“o lobo que nunca dorme”, em
                  português, pelas suas missões noturnas) para ajudar a
                  juventude. Pode-se dizer que a faísca iniciadora do Escotismo
                  foi a publicação do livro “Ajudas à Exploração Militar” (Aids
                  To Scouting, 1899, de B-P), que continha informações para os
                  militares sobre seguir pistas, exploração e técnicas que se
                  referiam à vida em campo, e que os rapazes ingleses usaram
                  para se divertir de maneira aventurosa. Baden-Powell foi
                  considerado um herói por haver resistido vitoriosamente a um
                  cerco de 217 dias em Mafeking, África do Sul, durante a Guerra
                  dos Bôeres. Percebendo o enorme interesse dos jovens em
                  aprender e replicar as técnicas citadas no livro, Baden-Powell
                  empenhou-se em adaptá-lo para ser um acréscimo atraente ao
                  programa das escolas britânicas. Reuniu experiências e as
                  atividades dos exploradores para criar algo que pudesse
                  <img
                    style={{
                      width: "45%",
                      height: "45%",
                      float: "right",
                      boxShadow: "0 0 8px 8px white inset",
                    }}
                    src={bpowell}
                    className="fadeIn image"
                    alt="bpowell"
                  />
                  realmente ser utilizado na educação e formação dos jovens: o
                  Escotismo. No dia 1º de agosto de 1907, ele levou 20 rapazes
                  para a Ilha de Brownsea, no Canal da Mancha, para realizar o
                  primeiro acampamento escoteiro do mundo – essa era a forma que
                  B-P havia encontrado para testar suas ideias. Ao longo de oito
                  dias, ele aplicou diversos ensinamentos sobre vida em equipe e
                  ao ar livre, acampamentos, fogueiras, jogos, rastreamento,
                  observação e dedução, técnicas de primeiros socorros,
                  alimentação e boas ações. Ele havia pensado nessa diversidade
                  de práticas para que os jovens pudessem voltar para casa mais
                  independentes e com novas habilidades. O acampamento foi um
                  sucesso e, no início do ano seguinte, Baden-Powell lançou as
                  seis edições do guia “Escotismo para Rapazes”, sem sonhar que
                  estaria fundando o maior movimento educacional de jovens do
                  planeta. A busca pelos manuais foi tão grande que ocasionou o
                  surgimento de Tropas Escoteiras por toda parte. Em vista dessa
                  inesperada expansão do Movimento, B-P solicitou que fosse
                  passado para a reserva (aposentadoria) do Exército, a fim de
                  dedicar-se à sua “segunda vida”, como chamava o Escotismo.
                  Passou, então, a viajar por diversos países, para orientar a
                  constituição e o trabalho das associações escoteiras e para
                  fazer do Escotismo uma grande fraternidade mundial. O
                  Escotismo foi crescendo, ramificando-se também numa vertente
                  para as meninas (em 1909) e, em 1920, com o fim da Primeira
                  Guerra Mundial, reuniu cerca de 8 mil jovens em Londres para o
                  primeiro Jamboree Mundial, o maior evento escoteiro do mundo.{" "}
                </p>{" "}
                <p>
                  Não há como retratar a história do Movimento Escoteiro sem
                  retratar a história de seu fundador, proclamado “Chefe
                  Escoteiro Mundial” pela multidão de rapazes presentes ao
                  primeiro grande evento escoteiro. B-P dedicou o resto de sua
                  vida à concretização do Movimento Escoteiro, crente que o
                  desenvolvimento dos jovens, o respeito ao próximo e a prática
                  de boas ações diárias, poderiam auxiliar a construir um mundo
                  melhor. Baden-Powell envelheceu e passou a morar no Quênia, ao
                  lado da mulher, Olave Baden-Powell, que o acompanhou em todas
                  as aventuras, atuando para que as meninas também pudessem se
                  divertir e aprender no Movimento Escoteiro. B-P faleceu em
                  casa, em 8 de janeiro de 1941. Mesmo com a partida de seu
                  criador, o Escotismo continuou a crescer e a conquistar o
                  coração de crianças, jovens e adultos, alcançando mais de 40
                  milhões de membros em 216 países e territórios. Atualmente
                  somos mais de 100 mil escoteiros no Brasil, sendo cerca de 25
                  mil adultos voluntários e 75 mil jovens, distribuídos em 1480
                  grupos escoteiros nas 671 cidades.
                </p>
              </div>
            </div>


            <div style={{ display: 'none' }} className="historiaResponsivo">
              <div className="historiatext historiatextresponsivo fadeIn">
                <p>
                  O Movimento Escoteiro foi fundado em 1907 pelo General Robert
                  Stephenson Smith Baden-Powell, na Inglaterra. Sem pretender
                  trazer a rigidez militar para o Movimento Escoteiro,
                  Baden-Powell aproveitou os elementos positivos de fomento à
                  camaradagem, iniciativa, coragem e autodisciplina, bem como
                  técnicas que seriam úteis no desenvolvimento dos jovens para
                  criar um movimento educacional. Baden-Powell utilizou-se dos
                  saberes e habilidades que aprendeu no serviço militar em
                  lugares agrestes da índia e da África, quando se tornou
                  conhecido como “Impisa”, (“o lobo que nunca dorme”, em
                  português, pelas suas missões noturnas) para ajudar a
                  juventude.

                  <img
                    style={{
                      marginLeft: '0',
                      width: "100",
                      height: "100%",
                      boxShadow: "0 0 8px 8px white inset",
                    }}
                    src={bpowell}
                    className="fadeIn image"
                    alt="bpowell"
                  />



                  Pode-se dizer que a faísca iniciadora do Escotismo
                  foi a publicação do livro “Ajudas à Exploração Militar” (Aids
                  To Scouting, 1899, de B-P), que continha informações para os
                  militares sobre seguir pistas, exploração e técnicas que se
                  referiam à vida em campo, e que os rapazes ingleses usaram
                  para se divertir de maneira aventurosa. Baden-Powell foi
                  considerado um herói por haver resistido vitoriosamente a um
                  cerco de 217 dias em Mafeking, África do Sul, durante a Guerra
                  dos Bôeres. Percebendo o enorme interesse dos jovens em
                  aprender e replicar as técnicas citadas no livro, Baden-Powell
                  empenhou-se em adaptá-lo para ser um acréscimo atraente ao
                  programa das escolas britânicas. Reuniu experiências e as
                  atividades dos exploradores para criar algo que pudesse
                  realmente ser utilizado na educação e formação dos jovens: o
                  Escotismo. No dia 1º de agosto de 1907, ele levou 20 rapazes
                  para a Ilha de Brownsea, no Canal da Mancha, para realizar o
                  primeiro acampamento escoteiro do mundo – essa era a forma que
                  B-P havia encontrado para testar suas ideias. Ao longo de oito
                  dias, ele aplicou diversos ensinamentos sobre vida em equipe e
                  ao ar livre, acampamentos, fogueiras, jogos, rastreamento,
                  observação e dedução, técnicas de primeiros socorros,
                  alimentação e boas ações. Ele havia pensado nessa diversidade
                  de práticas para que os jovens pudessem voltar para casa mais
                  independentes e com novas habilidades. O acampamento foi um
                  sucesso e, no início do ano seguinte, Baden-Powell lançou as
                  seis edições do guia “Escotismo para Rapazes”, sem sonhar que
                  estaria fundando o maior movimento educacional de jovens do
                  planeta. A busca pelos manuais foi tão grande que ocasionou o
                  surgimento de Tropas Escoteiras por toda parte. Em vista dessa
                  inesperada expansão do Movimento, B-P solicitou que fosse
                  passado para a reserva (aposentadoria) do Exército, a fim de
                  dedicar-se à sua “segunda vida”, como chamava o Escotismo.
                  Passou, então, a viajar por diversos países, para orientar a
                  constituição e o trabalho das associações escoteiras e para
                  fazer do Escotismo uma grande fraternidade mundial. O
                  Escotismo foi crescendo, ramificando-se também numa vertente
                  para as meninas (em 1909) e, em 1920, com o fim da Primeira
                  Guerra Mundial, reuniu cerca de 8 mil jovens em Londres para o
                  primeiro Jamboree Mundial, o maior evento escoteiro do mundo.{" "}
                </p>{" "}
                <p>
                  Não há como retratar a história do Movimento Escoteiro sem
                  retratar a história de seu fundador, proclamado “Chefe
                  Escoteiro Mundial” pela multidão de rapazes presentes ao
                  primeiro grande evento escoteiro. B-P dedicou o resto de sua
                  vida à concretização do Movimento Escoteiro, crente que o
                  desenvolvimento dos jovens, o respeito ao próximo e a prática
                  de boas ações diárias, poderiam auxiliar a construir um mundo
                  melhor. Baden-Powell envelheceu e passou a morar no Quênia, ao
                  lado da mulher, Olave Baden-Powell, que o acompanhou em todas
                  as aventuras, atuando para que as meninas também pudessem se
                  divertir e aprender no Movimento Escoteiro. B-P faleceu em
                  casa, em 8 de janeiro de 1941. Mesmo com a partida de seu
                  criador, o Escotismo continuou a crescer e a conquistar o
                  coração de crianças, jovens e adultos, alcançando mais de 40
                  milhões de membros em 216 países e territórios. Atualmente
                  somos mais de 100 mil escoteiros no Brasil, sendo cerca de 25
                  mil adultos voluntários e 75 mil jovens, distribuídos em 1480
                  grupos escoteiros nas 671 cidades.
                </p>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
}
