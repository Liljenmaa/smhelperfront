export default interface SelectedHeroesProps {
    selectedHeroes: string[];
    clickHandler: (name: string) => void;
    processComplete: () => void;
}
