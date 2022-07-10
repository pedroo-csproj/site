import React from "react";

import { NotFoundImage } from "../../assets";
import { Container } from "./style";

export const NotFound: React.FC = () => {
    return (
        <Container>
            <img src={NotFoundImage} title="not found" alt="not found" />
            <p>wow, looks like that you typed a invalid route fella. <a href="/">Click here</a> to get back.</p>
        </Container>
    );
};
