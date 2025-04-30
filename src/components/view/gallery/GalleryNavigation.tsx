interface GalleryNavigationProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const GalleryNavigation = (props: GalleryNavigationProps) => {
    const { totalPages, currentPage, setCurrentPage } = props;

    return (
        <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={'gallery-nav-'+index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-2 h-2 rounded-full ${currentPage === index ? "bg-primary-500" : "bg-secondary-300"}`}
                    aria-label={`Go to ${index + 1}`}
                />
            ))}
        </div>
    )
};

export default GalleryNavigation;