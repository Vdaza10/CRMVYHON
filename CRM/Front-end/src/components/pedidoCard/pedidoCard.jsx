import React from "react";
import PropTypes from "prop-types";
import {
    CardContainer,
    CardHeader,
    CardContent,
    CardFooter,
    } from "./style"

    const Card = ({ title, content, footer }) => {
    return (
        <CardContainer>
        <CardHeader>{title}</CardHeader>
        <CardContent>{content}</CardContent>
        <CardFooter>{footer}</CardFooter>
        </CardContainer>
    );
    };

    Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired,
};

export default Card;
