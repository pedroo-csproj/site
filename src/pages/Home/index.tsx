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
                    <p>Hi, here's pedroo_csproj, or just Pedro. I'm a software engineer based on Brazil, actually I'm work as a Senior Software Enginner at <a href="https://www.digi.ag/" target="_blank" rel="noreferrer">Digi</a>, and I'm {new Date().getFullYear() - 2002} years old. I develop computer programs since 14, I fall in love by this art in firt time on create few simple programs in Windows Forms with .Net. Today my skills are focused in backend <i>(how you can see by the simple design of this site)</i>. I'm a nerd too <i>(wow, who could imagine?)</i>, I like to read japanese mangas and buy anime figures <i>(principally of Evangelion)</i>, I like to play games too, but to be honest I don't play every day. My favorite manga is <i>Oyasumi Punpun</i>, anime is <i>Kimi no Na wa</i>, novel is <i>Sword Art Online</i>, and game is <i>The Elder Scrolls 5: Skyrim</i>. That's all, thanks for stop by, take care and buy Bitcoin.</p>
                </Description>
            </AboutMe>
        </div>
    );
};
