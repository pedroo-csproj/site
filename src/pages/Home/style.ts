import styled from "styled-components";

export const AboutMe = styled.div`
    h1 {
        line-height: 5px;
    }

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
`

export const Description = styled.div`
    margin-top: 40px;

    p {
        margin: 0 auto;
        text-align: justify;
        max-width: 60%;
        font-size: 16px;
    }
`;

export const Contact = styled.div`
    margin-top: 70px;

    a {
        margin: 0px 15px 0px 15px;
    }
`;

export const Button = styled.div`
margin-top: 60px !important;

    a {
        color:#f5f5f5;
        text-decoration: none;
        background-color: #333333;
        padding: 10px 10%;
        font-size: 18px;
        transition: all 0.2s ease-in-out;
    }

    a:hover {
        transition: all 0.2s ease-in-out;
        background-color:#555555;
    }
`;
