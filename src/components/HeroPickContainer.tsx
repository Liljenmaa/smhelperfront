import heroes from "./../data/heroes.json";
import Hero from "./subcomponents/Hero";
import type HeroProps from "./../types/HeroProps";

export default function HeroPickContainer(props: HeroProps): JSX.Element {
    return (
        <div className="hero-pick-container">
            {heroes.adult.map((hero) => (
                <Hero
                    key={hero.name}
                    name={hero.name}
                    displayName={hero.displayName}
                    selectedPriority={props.selectedHeroes.findIndex(
                        (name) => name === hero.name
                    )}
                    clickHandler={() => {
                        props.clickHandler(hero.name);
                    }}
                ></Hero>
            ))}
        </div>
    );
}
