import styled from "styled-components";

export const AboutMe = styled.div`
    img {
        border-radius: 50%;
    }

    @media (min-width: 600px) {
        img{
            width: 150px;
            height: 150px;
            transition: all 0.3s ease-in-out;
        }

        h1{
            line-height: 5px;
        }
    }

    @media (max-width: 600px) {
        img {
            width: 180px;
            height: 180px;
            transition: all 0.3s ease-in-out;
        }
    }
`;

export const Description = styled.div`
    margin-top: 40px;

    p {
        margin: 0 auto;
        text-align: justify;
    }

    @media (max-width: 600px) {
        p{
            font-size: 18px;
        }
    }

    @media (min-width: 600px) {
        p {
            text-align: justify;
            max-width: 70%;
            font-size: 16px;
        }
    }
`;

export const Contact = styled.div`
    margin-top: 70px;

    a {
        margin: 15px;
    }
`;

export const Button = styled.div`
margin-top: 60px;

    button{
        cursor: pointer;   
        border:none;
        background: #333333;
        color:#f5f5f5;
        font-size: 18px;
    }

    button:hover{
        transition: all 0.2s ease-in-out;
        background-color:#555555;
    }

    @media (max-width: 600px) {
        button{
            padding: 15px 0px;

            width: 100%;
            transition: 0.5s;
        }
    }

    @media (min-width: 600px) {
        button{
            padding: 10px 0px;
            width: 350px;
            transition: 0.5s;
        }
    }
`;
