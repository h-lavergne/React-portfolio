import React from "react";

import devgrub from "../assets/images/devgrub.png";
import youtube from "../assets/images/youtube.png";
import evverest from "../assets/images/evverest.png";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
class Carousel extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: devgrub,
                    link:"https://facebook.com",
                    selected: false
                },
                {
                    id: 1,
                    title: 'Hugo Lavergne',
                    subTitle: 'Youtube Channel',
                    imgSrc: youtube,
                    link:"https://linkedin.com",
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'The cookbook for developers',
                    imgSrc: evverest,
                    link:"https://google.com",
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id) => {
        let items = [...this.state.items];

        items[id].selected = !items[id].selected;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    };


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        });
    };

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;