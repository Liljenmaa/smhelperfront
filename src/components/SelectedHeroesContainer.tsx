import Hero from "./subcomponents/Hero";
import type HeroProps from "./../types/HeroProps";

const SelectedHeroesContainer = (props: HeroProps): JSX.Element => (
    <div className="selected-heroes-container">
        {props.selectedHeroes.map((name, idx) => (
            <Hero
                key={name}
                name={name}
                selectedPriority={idx}
                clickHandler={() => {
                    props.clickHandler(name);
                }}
            ></Hero>
        ))}
    </div>
);

export default SelectedHeroesContainer;
