interface IShimmerType {
    shimmerType: "bloglisting" | "blog";
}

export default function BlogSkeleton({ shimmerType }: IShimmerType) {
    if (shimmerType === "blog") {
        return (
            <div role="status" className="max-w-sm animate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    return (
        <div>
            <div
                role="status"
                className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center p-2 flex-col"
            ></div>

            <div className="w-full">
                <div className="flex items-center mt-4 mb-2">
                    <svg
                        className="w-10 h-10 me-3 text-gray-200 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div>
                        <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
                        <div className="w-48 h-2 bg-gray-200 rounded-full "></div>
                    </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[440px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[460px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
}
