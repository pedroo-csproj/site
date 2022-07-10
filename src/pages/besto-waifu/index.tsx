import React from "react";

import { BestoWaifuImage } from "../../assets";
import { Container } from "./style";

export const BestoWaifu: React.FC = () => {
    return (
        <Container>
            <img src={BestoWaifuImage} title="best waifu" alt="Asuka Langley" />
            <p>
                <a href="https://myanimelist.net/character/94/Asuka_Langley_Souryuu" target="_blank" rel="noreferrer">
                    Asuka Langley Souryuu
                </a> is the best waifu.
            </p>
        </Container>
    );
};
