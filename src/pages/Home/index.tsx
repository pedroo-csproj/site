import React from "react";

import ProfileImage from "../../assets/profile.jpg";
import { AboutMe, Description } from "./style";

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
        </div>
    );
};
