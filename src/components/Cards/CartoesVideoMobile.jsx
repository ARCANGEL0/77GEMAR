import { Card, Button } from "react-bootstrap";
import diaEscoteiro from "../../assets/img/diaEscoteiro.jpeg";
import escotismo from "../../assets/img/escotismo.jpg";
import historia from "../../assets/img/historiaGrupo.jpeg";
// sections for this page/view

export default function CartoesVideo() {
  return (
    <>
      <div className="youtubeDiv">
        <h2 className="youtubeText">
          {" "}
          <center> Se inscreva no nosso canal!</center>{" "}
        </h2>
      </div>
      <div
        style={{ marginRight: "0%", marginLeft: "5px" }}
        className="cards row"
      >
        <div className="col">
          <Card clasName="cardItem " style={{ width: "100%", height: "40%" }}>
            <Card.Img variant="top" src={diaEscoteiro} />
            <Card.Body>
              <Card.Title>Dia 23 de Abril. Dia mundial do escoteiro</Card.Title>
              <Card.Text>
                77° Grupo Escoteiros do Mar Jair Mattenauer Silveira
                homenageando todos os Escoteiros do Mundo.
              </Card.Text>
              <Button
                href="https://www.youtube.com/watch?v=lEvsD8nVC8A"
                variant="primary"
              >
                Assistir no Youtube
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card clasName="cardItem " style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              style={{ height: "40vh" }}
              src={escotismo}
            />
            <Card.Body>
              <Card.Title>Sobre o escotismo </Card.Title>
              <Card.Text>
                Um mundo melhor! Um breve resumo sobre o que é o Escotismo, o
                maior movimento educacional e de cidadania do mundo, que além de
                proporcionar entretenimento e amizades, ensina disciplina,
                valores, empatia e cidadania e responsabilidade.
              </Card.Text>
              <Button
                target="_blank"
                href="https://www.youtube.com/watch?v=tj39wnNbVUM"
                variant="primary"
              >
                Assistir no Youtube
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col">
          {" "}
          <Card clasName="cardItem " style={{ width: "100%", height: "30%" }}>
            <Card.Img target="_blank" variant="top" src={historia} />
            <Card.Body>
              <Card.Title>34 anos de história do 77º GEMAR</Card.Title>
              <Card.Text>
                No dia 15 de Agosto de 2021, o grupo completou seus 34 anos de
                história no Guarujá. Parabéns a todos que fizeram parte desta
                jornada!
              </Card.Text>
              <Button
                target="_blank"
                href="https://www.youtube.com/watch?v=ruPpwogqK0c"
                variant="primary"
              >
                Assistir no Youtube
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
