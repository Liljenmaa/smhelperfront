import type SelectedHeroesProps from "./../types/SelectedHeroesProps";
import SelectedHeroesContainer from "./SelectedHeroesContainer";
import SelectionControlPanel from "./SelectionControlPanel";

const SelectionContainer = (props: SelectedHeroesProps): JSX.Element => (
    <div className="selection-container">
        <SelectedHeroesContainer
            selectedHeroes={props.selectedHeroes}
            clickHandler={props.clickHandler}
        />
        <SelectionControlPanel
            selectedHeroes={props.selectedHeroes}
            processComplete={props.processComplete}
        />
    </div>
);

export default SelectionContainer;
