import { useState } from "react";
import HeroPick from "./subcomponents/HeroPick";

export default function HeroPickContainer(): JSX.Element {
    const [selectedHeroes, setSelectedHeroes] = useState([] as string[]);

    function updateSelectedHeroes(hero: string): void {
        const isAlreadySelected = selectedHeroes.includes(hero);

        if (!isAlreadySelected) {
            setSelectedHeroes([...selectedHeroes, hero]);
            return;
        }

        setSelectedHeroes([...selectedHeroes].filter((h) => hero !== h));
    }

    return (
        <div className="hero-pick-container">
            <HeroPick
                name="rhinar"
                selected={selectedHeroes.includes("rhinar")}
                clickHandler={() => {
                    updateSelectedHeroes("rhinar");
                }}
            />
            <HeroPick
                name="katsu"
                selected={selectedHeroes.includes("katsu")}
                clickHandler={() => {
                    updateSelectedHeroes("katsu");
                }}
            />
            <HeroPick
                name="levia"
                selected={selectedHeroes.includes("levia")}
                clickHandler={() => {
                    updateSelectedHeroes("levia");
                }}
            />
            <HeroPick
                name="fai"
                selected={selectedHeroes.includes("fai")}
                clickHandler={() => {
                    updateSelectedHeroes("fai");
                }}
            />
            <HeroPick
                name="oldhim"
                selected={selectedHeroes.includes("oldhim")}
                clickHandler={() => {
                    updateSelectedHeroes("oldhim");
                }}
            />
            <HeroPick
                name="dorinthea"
                selected={selectedHeroes.includes("dorinthea")}
                clickHandler={() => {
                    updateSelectedHeroes("dorinthea");
                }}
            />
            <HeroPick
                name="bravo"
                selected={selectedHeroes.includes("bravo")}
                clickHandler={() => {
                    updateSelectedHeroes("bravo");
                }}
            />
            <HeroPick
                name="emperor"
                selected={selectedHeroes.includes("emperor")}
                clickHandler={() => {
                    updateSelectedHeroes("emperor");
                }}
            />
            <HeroPick
                name="dash"
                selected={selectedHeroes.includes("dash")}
                clickHandler={() => {
                    updateSelectedHeroes("dash");
                }}
            />
            <HeroPick
                name="viserai"
                selected={selectedHeroes.includes("viserai")}
                clickHandler={() => {
                    updateSelectedHeroes("viserai");
                }}
            />
        </div>
    );
}
