import React from "react";
import { Experinence } from "../../../data/Experinence";
import {
    Card,
    CardLeft,
    CardRight,
    // TechCardContainer,
    // TechCard,
    BtnGroup,
} from "./ExperinenceCardelement";
import ScrollAnimation from "react-animate-on-scroll";
function Experinencecard() {
    return (
        <>
            {Experinence.map((list, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                    <Card>
                        <CardLeft>
                            <img src={list.img} alt={list.name} />
                        </CardLeft>
                        <CardRight>
                            <h4>{list.company_name}</h4>
                            <h3>{list.title}</h3>

                            <h3>{list.exprinence}</h3>
                            <BtnGroup>
                                <a
                                    className="btn SecondaryBtn btn-shadow"
                                    href={list.linke_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Linkedin
                                </a>
                            </BtnGroup>
                        </CardRight>
                    </Card>
                </ScrollAnimation>
            ))}
        </>
    );
}

export default Experinencecard;
