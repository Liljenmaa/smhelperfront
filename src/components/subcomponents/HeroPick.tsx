interface HeroPickProps {
    name: string;
    selected: boolean;
    clickHandler: () => void;
}

const HeroPick = (props: HeroPickProps): JSX.Element => (
    <div className="hero-pick" onClick={props.clickHandler}>
        <div className="hero-pick-picture">
            {props.selected && <div className="selection-indicator"></div>}
        </div>
        <div className="hero-pick-title">{props.name}</div>
    </div>
);

export default HeroPick;
