import styled from "styled-components";

export const Container = styled.div`
    @media (max-width: 600px) {
        img {
        width: 280px;
        height: 280px;
        transition: 0.5s;
        }
    }

    @media (min-width: 600px) {
        img {
            width: 380px;
            height: 380px;
            transition: 0.5s;
        }
    }
`;
