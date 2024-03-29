import React from 'react';
import './App.css';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Container} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Hugo Lavergne",
      headerLinks : [
        {title: "Home", path: "/"},
        {title: "About", path: "/about"},
        {title: "Contact", path: "/contact"},
      ],
      home: {
        title: "Be Relentless",
        subTitle: "Projects that make a difference",
        text: "Checkout my projects below"
      },

      about: {
        title: "About me",
      },

      contact: {
        title: "Get in Touch !",
      }
    }
  }

  render() {
    return (
        <Router>
          <Container fluid={true} className="p-0">
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Hugo Lavergne</Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link to="/" className="nav-link">Home</Link>
                  <Link to="/about" className="nav-link">About</Link>
                  <Link to="/contact" className="nav-link">Contact</Link>


                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}         />
            <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
            <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />

            <Footer/>
          </Container>

        </Router>
    );
  }


}

export default App;
