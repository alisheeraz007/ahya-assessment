import ButtonOutline from "./ButtonOutline";

export default function Pagination({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
    isloading,
    setIsLoading
}) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1 || isloading) return null;

    const handlePageChange = (page) => {
        setIsLoading(true);
        onPageChange(page);
    };

    const handlePrev = () => {
        if (currentPage > 0) handlePageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) handlePageChange(currentPage + 1);
    };

    const getPages = () => {
        const pages = [];
        const delta = 1;

        const start = Math.max(0, currentPage - delta);
        const end = Math.min(totalPages - 1, currentPage + delta);

        if (start > 0) {
            pages.push(0);
            if (start > 1) pages.push("...");
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (end < totalPages - 1) {
            if (end < totalPages - 2) pages.push("...");
            pages.push(totalPages - 1);
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
            <ButtonOutline
                onClick={handlePrev}
                disabled={currentPage === 0}
                text="Prev"
            />

            {getPages().map((page, i) =>
                page === "..." ? (
                    <span key={i} className="px-2">
                        ...
                    </span>
                ) : (
                    <button
                        key={i}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1 border rounded ${currentPage === page ? "bg-blue-500 text-white" : ""
                            }`}
                    >
                        {page + 1}
                    </button>
                )
            )}

            <ButtonOutline
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
                text="Next"
            />
        </div>
    );
}