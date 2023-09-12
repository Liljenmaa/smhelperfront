import type HeroPickProps from "../../types/HeroPickProps";

const Hero = (props: HeroPickProps): JSX.Element => (
    <div className="hero-pick" onClick={props.clickHandler}>
        <img className="hero-pick-picture" src={props.name + "_hero.jpg"}></img>
        {props.selectedPriority !== -1 && (
            <div className="selection-indicator">
                {props.selectedPriority + 1}.
            </div>
        )}
        {props.displayName !== undefined && props.displayName !== "" && (
            <div className="hero-pick-title">{props.displayName}</div>
        )}
    </div>
);

export default Hero;
