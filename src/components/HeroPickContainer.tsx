import { useState, useEffect } from "react";
import Hero from "./subcomponents/Hero";
import type HeroType from "./../types/Hero";
import type HeroProps from "./../types/HeroProps";

export default function HeroPickContainer(props: HeroProps): JSX.Element {
    const [heroes, setHeroes] = useState([] as HeroType[]);

    useEffect(() => {
        void fetch(`${process.env.HOST}${process.env.HEROES}`)
            .then(async (response) => await response.json())
            .then((data) => {
                setHeroes(data);
            });
    }, []);

    return (
        <div className="hero-pick-container">
            {heroes?.map((hero) => (
                <Hero
                    key={hero.hero}
                    name={hero.hero}
                    displayName={hero.name}
                    selectedPriority={props.selectedHeroes.findIndex(
                        (name) => name === hero.hero
                    )}
                    clickHandler={() => {
                        props.clickHandler(hero.hero);
                    }}
                ></Hero>
            ))}
        </div>
    );
}
