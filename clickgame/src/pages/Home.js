import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Images from "../list.json";
// import Alert from "../components/Alert";
class Home extends Component {
    state = {
        correctGuess: 0,
        highScore: 0,
        previousGuesses: [],
        Images
    };

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron
                    title="Clicky Game"
                    text="Use your memory skills to click every image only once."
                />

                {this.state.Images.map(image => (
                    <Container>
                        <Card image={image.src} />
                    </Container>
                ))}
            </div>
        );
    }
}

export default Home;
