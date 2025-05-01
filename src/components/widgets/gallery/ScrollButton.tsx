import Icons, { ChevronDirection } from "@icons/Icons";

enum ScrollDirection {
    LEFT = 'left',
    RIGHT = 'right'
}

interface ScrollButtonProps {
    direction: ScrollDirection;
    canScroll: boolean;
    onScroll: (direction: ScrollDirection) => void;
    className?: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = (props) => {
    const { direction, canScroll, onScroll, className = "" } = props;
    const isLeft = direction === ScrollDirection.LEFT;
    const positionClass = isLeft ? "-left-4" : "-right-4";
    const ariaLabel = isLeft ? "Scroll left" : "Scroll right";
    const chevronDirection = isLeft ? ChevronDirection.LEFT : ChevronDirection.RIGHT;

    const baseClasses = "absolute top-1/2 -translate-y-1/2 bg-accent-400 dark:bg-accent-800 rounded-full p-2 shadow-md z-60 flex items-center justify-center";

    const stateClasses = canScroll
        ? "text-primary-100 cursor-pointer hover:bg-accent-500 dark:hover:bg-accent-700"
        : "text-gray-400 dark:text-gray-600 cursor-not-allowed opacity-50";

    const buttonClasses = `${baseClasses} ${stateClasses} ${positionClass} ${className}`;

    const handleClick = () => {
        if (canScroll) {
            onScroll(direction);
        }
    };

    return (
        <button onClick={handleClick} className={buttonClasses} aria-label={ariaLabel} disabled={!canScroll}>
            <div className="w-6 h-6 flex items-center justify-center">
                <Icons.Chevron direction={chevronDirection} />
            </div>
        </button>
    );
};

export default ScrollButton;