import { useLoaderData } from "react-router-dom";
import { AutoContext } from "../Authprovider/AuthContext";
import { useContext, useEffect, useRef, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { toast } from "react-toastify";

// swiper

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import ReviewCard from "./ReviewCard";
import { reload } from "firebase/auth";
import Swal from "sweetalert2";

const Details = () => {
    const Data = useLoaderData();
    const { loading, user } = useContext(AutoContext);
    const { name, image, description, upvoteCount, tags, externalLinks, _id } = Data;
    const [voteCount, setVoteCount] = useState(upvoteCount);
    const textAreaRef = useRef(null);
    const textAreaRef2 = useRef(null);

    const handleUpvote = () => {
        setVoteCount(voteCount + 1);
    };

    const { email, displayName, photoURL } = user;
    const handleReview = (e) => {
        e.preventDefault();
        const reviewStar = parseInt(e.target.reviews.value);
        console.log(reviewStar)
        const message = e.target.textReview.value;
        const reviewData = { reviewStar, message, reviewerName: displayName, reviewEmail: email, id: _id, photo: photoURL };

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(async res => {
                const data = await res.json();
                if (res.status === 201) {
                    toast.success('Review added successfully');
                }
                // else {
                //     // toast.error('An unexpected error occurred.');
                //     console.log()
                // }
            })
            .catch(error => {
                toast.error('Failed to fetch. Please try again later.');
                console.error('Fetch error:', error);
            });

        textAreaRef.current.value = "";
        textAreaRef2.current.value = "";
        window.location.reload()
    };
    const [reviewData, setReviewData] = useState([])
    const [hideFom, setHide] = useState('')
    const [reporthideFom, setReportHide] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:5000/reviewData/${_id}`)
            .then(res => res.json())
            .then(data => {
                const userReview = data.find(review => review.reviewEmail === email && review.id === _id);
                if (userReview) {
                    setHide('hide'); // Hide the form if a review from this user already exists
                }
                setReviewData(data);
            })

        fetch(`http://localhost:5000/reportData/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const Report = data.find(review => review.email === email && review.id === _id);
                if (Report) {
                    setReportHide(true); // Hide the form if a review from this user already exists
                }
                else{
                    setReportHide(false)
                }
            })

    }, [_id])
    console.log(hideFom)
    const handleReport = () => {
        setReportHide(true)
        const Reportdata = { email: email, id: _id,name }
        fetch(`http://localhost:5000/report`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Reportdata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'succesfull',
                        text: 'Item Report successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!"
                    });
                }
            })

    }
    return (
        <>
            {loading ? (
                <span className="loading loading-spinner text-neutral"></span>
            ) : (
                <div className="px-4">

                    <div className="w-full h-[680px] mt-4 md:flex pb-14">
                        <div className="md:w-[50%] w-[100%] h-full flex justify-center items-center">
                            <img className="w-full rounded-xl object-cover h-full" src={image} alt="" />
                        </div>
                        <div className="md:w-[50%] mt-3 sm:mt-0 w-[100%] h-full sm:pl-5 bg-[#FFF]">
                            <h3 className="m-0 sm:text-[40px] text-[20px] font-bold text-[#131313]"></h3>
                            <p className="text-[20px] font-medium text-[#424242]">
                                Name : <span>{name}</span>
                            </p>
                            <hr />
                            <p className="text-[20px] font-medium text-[#424242]"></p>
                            <hr className="text-white" />
                            <p className="font-normal text-[#5a5a5a] text-[16px]">
                                <span className="text-[#131313] font-bold">Description :</span>{description}
                            </p>
                            <hr />
                            <div className="lg:flex sm:gap-5 mt-3">
                                <button
                                    disabled={voteCount > upvoteCount}
                                    onClick={handleUpvote}
                                    className="btn flex flex-col"
                                >
                                    <FaArrowAltCircleUp className="" />
                                    {voteCount}
                                </button>
                                <p className="font-medium btn rounded-full text-[#23BE0A]">
                                    Tag:<>{tags}</>
                                </p>
                                <p onClick={handleReport} className=" text-red-700 font-medium mt-3 lg:mt-0 btn rounded-full" disabled={reporthideFom}>
                                    Report<></>
                                </p>
                            </div>
                            <div className="mt-4">
                                <div className="flex gap-[98px] mt-4">
                                    <p className="text-[#5a5a5a] font-medium">
                                        External links:{" "}
                                        <a
                                            className="ml-2 text-blue-500 hover:border-b-2 hover:border-blue-500"
                                            href={externalLinks}
                                        >
                                            {externalLinks}
                                        </a>{" "}
                                    </p>

                                    <p className="text-[#131313] sm:text-[16px] text-[10px] font-semibold"></p>
                                </div>
                                <form hidden={hideFom == "hide"} onSubmit={handleReview} className="mt-5">
                                    <div className="relative w-full">
                                        <select
                                            name="reviews"
                                            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                                            defaultValue=""
                                            required
                                            ref={textAreaRef}
                                        >
                                            <option value="" disabled hidden>
                                                Give Star Rating
                                            </option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <textarea
                                        required
                                        placeholder="Write your review"
                                        rows="5"
                                        name="textReview"
                                        className="w-full p-2 mt-3 shadow-xl border rounded-md"
                                        ref={textAreaRef2}
                                    ></textarea>
                                    <button type="submit" className="btn">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-[900px] sm:mt-[600px] md:mt-1 " >
                        <div className="flex justify-center" >
                            <p className=" text-[14px] sm:text-[32px] font-semibold" >User Reviews</p>
                        </div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                            breakpoints={{
                                // when window width is >= 640px
                                1: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                // when window width is >= 1024px
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {reviewData.map(item => (
                                <SwiperSlide key={item._id}>
                                    <ReviewCard item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </>
    );
};

export default Details;
