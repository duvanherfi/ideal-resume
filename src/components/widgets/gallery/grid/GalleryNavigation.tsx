interface GalleryNavigationProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const GalleryNavigation: React.FC<GalleryNavigationProps> = ({ totalPages, currentPage, setCurrentPage }) => {

    return (
        <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={`gallery-nav-page-${index}-${currentPage}`}
                    onClick={() => setCurrentPage(index)}
                    className={`w-2 h-2 rounded-full ${currentPage === index ? "bg-primary-500" : "bg-secondary-300"}`}
                    aria-label={`Go to ${index + 1}`}
                />
            ))}
        </div>
    )
};

export default GalleryNavigation;