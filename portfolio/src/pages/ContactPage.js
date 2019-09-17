import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'

class ContactPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            email: '',
            msg: '',
            disabled: false,
            emailSent: null,
        }
    }
    
    messageSubmit = (event) => {
        // preventing the deafult page from refreshing
        event.preventDefault()

        this.setState({
            // disable the ability for someone to submit the form twice
            disabled: true,
            // emailSent: true or false to see how the result looks
        })

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                })
            })
    }

    render() {
        return (
            <div>
                <Jumbotron className="bg-transparent Jumbotron-fluid p=0">
                    <Container fluid={true}>
                        <Row className="justify-content-center py=5">
                            <Col md={15}>
                                <h3 style={{fontSize:"50px", fontStyle:"italic"}} className="display-2 font-weight-bolder">{this.props.title}</h3>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            <Form style={{marginLeft:"20%",width:"60%"}} onSubmit={this.messageSubmit}>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control id="full-name" type="text" placeholder="Enter your name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control id="email" type="email" placeholder="name@example.com"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message ME</Form.Label>
                    <Form.Control id="msg" as="textarea" rows="5" placeholder="Enter your message here"/>
                </Form.Group>
                <Button type="submit" variant="primary" disabled={this.state.disabled}>
                    Send
                </Button>
                {this.state.emailSent === true && <p className="d-inline" style={{marginLeft:"10px",color:"green",fontStyle:"italic"}}>Email Sent !</p>}
                {this.state.emailSent === false && <p className="d-inline" style={{marginLeft:"10px",color:"red",fontStyle:"italic"}}>Email NOT Sent !</p>}
            </Form>
            </div>
        )
    }
}

export default ContactPage