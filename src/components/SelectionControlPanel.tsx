import { type ChangeEvent, useState } from "react";

interface SelectionControlPanelProps {
    numberOfSelectedHeroes: number;
}

function SelectionControlPanel(props: SelectionControlPanelProps): JSX.Element {
    const [nick, setNick] = useState("");

    function handleNickChange(event: ChangeEvent<HTMLInputElement>): void {
        setNick(event.target.value);
    }

    return (
        <div className="selection-control-panel">
            <label htmlFor="nick">Nimimerkkisi</label>
            <input
                className="selection-input"
                id="nick"
                type="text"
                onChange={handleNickChange}
            ></input>
            <button
                className="selection-button"
                disabled={nick === "" || props.numberOfSelectedHeroes < 3}
            >
                Lähetä
            </button>
        </div>
    );
}

export default SelectionControlPanel;
