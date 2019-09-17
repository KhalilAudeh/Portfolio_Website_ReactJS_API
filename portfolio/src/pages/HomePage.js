import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from './Carousel ';

function HomePage(props) {
    return (
        <div>
            <Jumbotron className="bg-transparent Jumbotron-fluid p=0">
                <Container fluid={true}>
                    <Row className="justify-content-center py=5">
                        <Col md={8}>
                            {props.title && <h1 className="display-2 font-weight-bolder">{props.title}</h1>}
                            {props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>}
                            {props.text && <h5 style={{fontStyle:"italic"}}className="display-6 font-weight-light font-style-italic">{props.text}</h5>}
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Carousel></Carousel>
        </div>
    )
}

export default HomePage
