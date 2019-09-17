import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

function AboutPage(props) {
    return (
        <div>
            <Jumbotron className="bg-transparent Jumbotron-fluid p=0">
                <Container fluid={true}>
                    <Row className="justify-content-center py=5">
                        <Col md={15}>
                            {props.title && <h3 style={{fontSize:"50px", fontStyle:"italic"}}className="display-2 font-weight-bolder">{props.title}</h3>}
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <p>
                            I am a fresh graduate from the Lebanese American University (LAU) in
                            Lebanon, one of the top universities in the region. I graduated with a 
                            Bachelor Degree in Computer Science and I'm excited to apply the skills I've
                            learned in the classrooms over the past three years in a more business-
                            oriented setting. 
                        </p>
                        <p>
                            Throughout these years, I've managed to have three different experiences 
                            which added to my skill set. I worked as a computer lab assistant at LAU, 
                            as an IT intern at JGROUP Holding and as Web Developer in India. Recently, I started work as Systems Engineer (Software Developer) at Naseej.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutPage
