import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {

  constructor(props) {
    super(props)
  
    // state for the top
    this.state = {
       title: 'Khalil Audeh',
       // array of objects for nav bar
       headerLinks: [
         { title: 'Home', path: '/' },
         { title: 'About ME', path: '/about' },
         { title: 'Contact ME', path: '/contact' }
       ],
       home: {
         title: 'Be Yourself',
         subTitle: '& Let It Go.',
         text: 'More details? Check below'
       },
       about: {
        title: 'About ME'
       },
       contact: {
        title: 'Let\'s Connect !'
       }
    }
  }
  
  render(){
    return(
      <Router>
        <Container fluid={true}>
          <Navbar className="border-bottom" expand="lg">
            <Navbar.Brand className="font-weight-bolder">{this.state.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About ME</Link>
                <Link className="nav-link" to="/contact">Contact ME</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title}/>}/>
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}/>}/>
        </Container>
      </Router>
    );
  }
}

export default App;
