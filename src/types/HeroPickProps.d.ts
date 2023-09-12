export default interface HeroPickProps {
    name: string;
    displayName?: string;
    selectedPriority: number;
    clickHandler: () => void;
}
