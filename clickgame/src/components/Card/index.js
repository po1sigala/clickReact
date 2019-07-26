import React from "react";
import { Card } from "react-bootstrap";

const HomeCard = props => (
    <>
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={`${props.image}`} />
        </Card>
    </>
);
export default HomeCard;
