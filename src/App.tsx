import { useState } from "react";
import Title from "./components/Title";
import HeroPickContainer from "./components/HeroPickContainer";
import SelectionContainer from "./components/SelectionContainer";

export default function App(): JSX.Element {
    const [selectedHeroes, setSelectedHeroes] = useState([] as string[]);

    function updateSelectedHeroes(hero: string): void {
        const isAlreadySelected = selectedHeroes.includes(hero);

        if (isAlreadySelected) {
            setSelectedHeroes([...selectedHeroes].filter((h) => h !== hero));
            return;
        }

        if (selectedHeroes.length === 5) return;

        setSelectedHeroes([...selectedHeroes, hero]);
    }

    return (
        <div>
            <Title />
            <HeroPickContainer
                selectedHeroes={selectedHeroes}
                clickHandler={updateSelectedHeroes}
            />
            <SelectionContainer
                selectedHeroes={selectedHeroes}
                clickHandler={updateSelectedHeroes}
            />
        </div>
    );
}
