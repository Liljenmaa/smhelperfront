import type HeroProps from "./../types/HeroProps";
import SelectedHeroesContainer from "./SelectedHeroesContainer";
import SelectionControlPanel from "./SelectionControlPanel";

const SelectionContainer = (props: HeroProps): JSX.Element => (
    <div className="selection-container">
        <SelectedHeroesContainer
            selectedHeroes={props.selectedHeroes}
            clickHandler={props.clickHandler}
        />
        <SelectionControlPanel
            numberOfSelectedHeroes={props.selectedHeroes.length}
        />
    </div>
);

export default SelectionContainer;
