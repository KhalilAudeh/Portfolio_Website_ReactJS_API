import React, { Component } from 'react'
import linkedin from '../assets/images/linkedin.jpeg'
import instagram from '../assets/images/instagram.jpg'
import google from '../assets/images/google.png'
import github from '../assets/images/github.png'
import Card from './Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel  extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             cards: [
                 {
                    id: 0,
                    title: 'Khalil Audeh',
                    subTitle: 'LinkedIn Profile',
                    Link: 'https://www.linkedin.com/in/khalil-audeh/',
                    img: linkedin,
                    selected: false
                 },
                 {
                    id: 1,
                    title: 'Khalil97',
                    subTitle: 'Instagram Profile',
                    Link: 'https://www.instagram.com/khalil_audeh/',
                    img: instagram,
                    selected: false
                 },
                 {
                    id: 2,
                    title: 'GOOGLE',
                    subTitle: 'Google Search',
                    Link: 'https://www.google.com/',
                    img: google,
                    selected: false
                 },
                 {
                    id: 3,
                    title: 'GitHub',
                    subTitle: 'Github Website',
                    Link: 'https://github.com/',
                    img: github,
                    selected: false
                 }
             ]
        }
    }
    
    handleCardClick = (id) => {
        console.log(id)

        // ... are those that define cards
        let cards = [...this.state.cards]

        // if it is selected set it to false; otherwise set it to true. reason is we can have a toggle
        cards[id].selected = cards[id].selected ? false : true

        // we only want to view the one we selected and set others to false
        // forEach: This iterates over a list and applies some operation with side effects to each list member
        cards.forEach(card => {
            if(card.id !== id){
                card.selected = false
            }
        })

        // set the state that's being selected
        this.setState({
            cards
        })
    }

    // Creating cards
    // map: This iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members
    // key is needed as we are mapping to the array and creating new cards
    makeCards = (cards) => {
        return cards.map(card => {
            return <Card card={card} onClick={(e => this.handleCardClick(card.id, e))} key={card.id}/>
        })
    }

    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row className="justify-content-around">
                        {this.makeCards(this.state.cards)}
                    </Row>
                </Container>     
            </div>
        )
    }
}

export default Carousel 
