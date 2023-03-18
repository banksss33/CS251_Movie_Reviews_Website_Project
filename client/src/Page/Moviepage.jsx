import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';


function Moviepage() {
  return (
    <div
      style={{
        backgroundColor: "rgb(0,22,22)",
      }}
    >
        <Container style={{color : '#FFF',backgroundColor: 'lightpink'}}>
            {/* movie name */}
            <Container>
            <h1>Title name</h1>
            <p>Score 4.0</p>
            <img src="#" alt="poping meter"></img>
            </Container>
            {/* Describe movie in short */}
            <Container style={{backgroundColor: 'plum'}}>
                <p>
                    describe something hahahahahahahahah
                </p>
            </Container>
            <Container style={{backgroundColor: 'plum'}}>
                <p>
                    Director
                </p>
                <p>who ta fuck is this</p>
            </Container>
            <Container style={{backgroundColor: 'plum'}}>
                <p>
                    Actor
                </p>
                <p>
                    who the hell is he or she
                </p>
            </Container>
            <Container style={{backgroundColor: 'plum'}}>
                <p>
                    Review
                </p>
                <Card border="primary"style={{
                    width: '100%',
                    color: 'black',
                    }}>
                    <Card.Header>Reviewer name</Card.Header>
                    <Card.Body>
                    <Card.Title style={{textAlign: 'right'}}>Score 4.0<img src="#" alt="poping meter"></img></Card.Title>
                    <Card.Text>
                        wowwwwwwwwww this movie is so good
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    </div>
  );
}

export default Moviepage;
