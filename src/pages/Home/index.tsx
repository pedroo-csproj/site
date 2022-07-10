import React from "react";

import ProfileImage from "../../assets/profile.jpg";
import { EmailImage, GithubImage, LinkedInImage, TwitterImage } from "../../assets/";
import { AboutMe, Contact, Description, Button } from "./style";

export const Home: React.FC = () => {
    return (
        <div>
            <AboutMe>
                <img src={ProfileImage} title="pedroo_csproj" alt="pedroo_csproj" />
                <h1>Hi, I'm Pedro Octávio</h1>
                <Description>
                    <p>
                        Hi, here's pedroo_csproj, or just Pedro. I'm a software engineer based on Brazil, actually I'm work
                        as a Senior Software Enginner at <a href="https://www.digi.ag/" target="_blank" rel="noreferrer">Digi</a>,
                        and I'm {new Date().getFullYear() - 2002} years old.
                    </p>
                    <br />
                    <p>
                        I develop computer programs since 14, I fall in love by this art in firt time
                        on create few simple programs in Windows Forms with .Net. Today my skills are
                        focused in backend <i>(how you can see by the simple design of this site)</i>.
                    </p>
                    <br />
                    <p>
                        That's all, thanks for stop by, take care and buy Bitcoin.
                    </p>
                </Description>
            </AboutMe>
            <Contact>
                <h1>Get in touch!</h1>
                <ContactLink socialUrl="mailto:pedrooctavio.dev@outlook.com" imageSource={EmailImage} imageTitle="email" imageAlt="pedroo_csproj email link" />
                <ContactLink socialUrl="https://github.com/pedroo-csproj" imageSource={GithubImage} imageTitle="github" imageAlt="pedroo_csproj github link" />
                <ContactLink socialUrl="https://www.linkedin.com/in/pedro-octavio/" imageSource={LinkedInImage} imageTitle="linkedin" imageAlt="pedroo_csproj linkedin link" />
                <ContactLink socialUrl="https://twitter.com/pedroo_csproj" imageSource={TwitterImage} imageTitle="twitter" imageAlt="pedroo_csproj twitter link" />
            </Contact>
            <Button>
                <a href="https://github.com/pedroo-csproj/Curriculum/raw/main/Curriculum-Pedro-Oct%C3%A1vio-english.pdf" download>Download my Curriculum</a>
            </Button>
        </div>
    );
};

interface IContactLinkProps {
    socialUrl: string;
    imageSource: string;
    imageTitle: string;
    imageAlt: string;
};

const ContactLink: React.FC<IContactLinkProps> = ({ socialUrl, imageSource, imageTitle, imageAlt }) => {
    return (
        <a href={socialUrl} target="_blank" rel="noreferrer">
            <img src={imageSource} title={imageTitle} alt={imageAlt} />
        </a>
    );
};
