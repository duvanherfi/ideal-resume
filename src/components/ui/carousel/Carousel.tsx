import Icons from "@icons/Icons";

interface CarouselProps {
    handlePrevious: () => void;
    handleNext: () => void;
    children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ handlePrevious, handleNext, children }) => {
    const controllerClassName = (extra?: string) => `${extra} absolute top-1/2 transform -translate-y-1/2 z-10 bg-primary-600 text-white rounded-full p-2 shadow-lg hover:bg-primary-700 focus:outline-none`
    
    return (
        <div className="carousel-container relative w-1/3 mx-auto">
            <button onClick={handlePrevious} className={controllerClassName("left-0")} aria-label="Previous template">
                <Icons.ArrowLeft />
            </button>
            <div className="carousel-wrapper flex justify-center items-center py-8">
                {children}
            </div>
            <button onClick={handleNext} className={controllerClassName("right-0")} aria-label="Next template">
                <Icons.ArrowRight />
            </button>
        </div>
    );
};

export default Carousel;