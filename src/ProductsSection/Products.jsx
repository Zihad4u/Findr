import { useEffect, useState } from "react";
import FeatureCard from "../Home/Feature/FeatureCard";



const Products = () => {
    const [Search, setSearch] = useState('')
    const search = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value;
        setSearch(searchValue);
    }

    const [data, setData] = useState([])
    const [totalCount,setTotalCount]=useState(0)
    const count = totalCount;
    const [itemPerPage, setItemPerPages] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);
    const numberOfPages = Math.ceil(count / itemPerPage);
    const pages = [...Array(numberOfPages).keys()];
    // console.log(pages)
    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    useEffect(() => {
        fetch(`https://assignment-12-server-side-cyan.vercel.app/allProduct?search=${Search}&page=${currentPage}&limit=${itemPerPage}`)
            .then(res => res.json())
            .then(data => {
                setData(data.result); // Update data with result
                setTotalCount(data.totalItems);
            })
    }, [Search, currentPage])
    return (
        <div>
            {/* search box */}
            <div>
                <form onSubmit={search} className="max-w-lg mx-auto">
                    <div className="relative w-full">
                        <input
                            name="search"
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg   border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Search..."

                        />
                        <button
                            type="submit"
                            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>

                        </button>
                    </div>
                </form>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" >
                    {
                        data.map(item => <FeatureCard
                            key={item._id}
                            item={item}
                        ></FeatureCard>)
                    }
                </div>
            </div>
            {/* pagination */}
            <div className="flex  justify-center  mt-5" >
                <button onClick={handlePrev} className="btn bg-[#2b3440] hover:text-black hover:border-red-600  text-white" >Prev</button>
                {
                    pages.map(item => <button onClick={() => setCurrentPage(item)} key={item} className={`btn bg-[#2b3440] hover:text-black hover:border-red-600  text-white ml-2 ${currentPage === item && 'bg-red-600'}`}  >{item}</button>)
                }
                <button onClick={handleNext} className="btn bg-[#2b3440] hover:text-black hover:border-red-600 ml-2 text-white" >Next</button>
            </div>
        </div>
    );
};

export default Products;