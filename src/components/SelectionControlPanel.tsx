import { type ChangeEvent, useState } from "react";

interface SelectionControlPanelProps {
    selectedHeroes: string[];
    processComplete: () => void;
}

function SelectionControlPanel(props: SelectionControlPanelProps): JSX.Element {
    const [nick, setNick] = useState("");
    const [error, setError] = useState(false);

    function handleNickChange(event: ChangeEvent<HTMLInputElement>): void {
        setNick(event.target.value);
    }

    function sendSelections(): void {
        setError(false);

        fetch(`${process.env.HOST}${process.env.SELECTION}`, {
            method: "POST",
            body: JSON.stringify({
                nick: nick,
                selections: props.selectedHeroes
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        }).then(response => response.json())
        .then((data) => {
            if (data.error) {
                setError(true);
                return;
            }

            props.processComplete();
        });
    }

    return (
        <div className="selection-control-panel">
            <label htmlFor="nick">{error ? "Jotain meni pieleen." : "Nimimerkkisi"}</label>
            <input
                className="selection-input"
                id="nick"
                type="text"
                onChange={handleNickChange}
            ></input>
            <button
                className="selection-button"
                onClick={() => sendSelections()}
                disabled={nick === "" || props.selectedHeroes.length < 3}
            >
                Lähetä
            </button>
        </div>
    );
}

export default SelectionControlPanel;
