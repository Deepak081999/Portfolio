import React from "react";
import { Educationschool } from "../../../data/Education";
import {
    Card,
    CardLeft,
    CardRight,
    // TechCardContainer,
    // TechCard,
    BtnGroup,
} from "./EducationCardElement";
import ScrollAnimation from "react-animate-on-scroll";
function Experinencecard() {
    return (
        <>
            {Educationschool.map((list, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                    <Card>
                        <CardLeft>
                            <img src={list.img} alt={list.name} />
                        </CardLeft>
                        <CardRight>
                            <h4>{list.name}</h4>
                            <h3>{list.title}</h3>

                            <h3>{list.percentage}</h3>

                            <BtnGroup>
                                {list.Website.length > 0 && (
                                    <a
                                        className="btn SecondaryBtn btn-shadow"
                                        href={list.Website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Website
                                    </a>
                                )}
                                {list.FaYoutube.length > 0 && (
                                    <a
                                        className="btn SecondaryBtn  btn-shadow"
                                        href={list.FaYoutube}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Youtube
                                    </a>
                                )}
                                {list.linke_url.length > 0 && (
                                    <a
                                        className="btn SecondaryBtn btn-shadow"
                                        href={list.linke_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        linkedin
                                    </a>
                                )}
                            </BtnGroup>
                        </CardRight>
                    </Card>
                </ScrollAnimation>
            ))}
        </>
    );
}

export default Experinencecard;
