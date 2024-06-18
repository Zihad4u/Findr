
import { Link, useLoaderData } from "react-router-dom";
import { AutoContext } from "../Authprovider/AuthContext";
import { useContext } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Details = () => {
    const Data = useLoaderData()
    const { loading } = useContext(AutoContext)
    const { name, image, description, upvoteCount, tags, externalLinks } = Data;
    return (
        <>
            {
                loading ? <span className="loading loading-spinner text-neutral"></span> : <div className="px-4" >
                    <div className="w-full h-[680px] mt-4 md:flex  pb-14" >
                        {/* left side div */}
                        <div className="md:w-[50%] w-[100%]  h-full  flex justify-center items-center" >
                            <img className="w-full rounded-xl object-cover h-full" src={image} alt="" />
                        </div>
                        {/* right side */}
                        <div className="md:w-[50%] mt-3 sm:mt-0 w-[100%] h-full sm:pl-5 bg-[#FFF]" >
                            <h3 className="m-0 sm:text-[40px] text-[20px] font-bold text-[#131313]" ></h3>
                            <p className="text-[20px] font-medium text-[#424242]" >Name : <span>{name}</span></p>
                            <hr />
                            <p className="text-[20px] font-medium text-[#424242]" ></p>
                            <hr className="text-white" />
                            <p className="font-normal text-[#5a5a5a]  text-[16px] " ><span className="text-[#131313] font-bold" >Description :</span>{description}</p>
                            <hr />
                            <div className="lg:flex sm:gap-5 mt-3 " >
                                <button className="btn flex flex-col "><FaArrowAltCircleUp className="" />{upvoteCount}</button>
                                <p className="font-medium btn rounded-full text-[#23BE0A]" >Tag:<>{tags}</></p>
                                <p className="font-medium mt-3 lg:mt-0 btn rounded-full text-red-700" >Report<></></p>
                            </div>
                            <div className="mt-4" >
                                <div className="flex gap-[98px] mt-4 " >
                                    <p className="text-[#5a5a5a] font-medium" >External
                                        links: <a className="ml-2 text-blue-500 hover:border-b-2 hover:border-blue-500" href={externalLinks}>{externalLinks}</a> </p>

                                    <p className="text-[#131313] sm:text-[16px] text-[10px]  font-semibold" ></p>
                                </div>
                                {/* <div className="flex gap-10 mt-4 " >
                                    <p className="text-[#5a5a5a] font-medium" >Price:</p>
                                </div>
                                <div className="flex gap-6 mt-3 " >
                                    <button onClick='' className="btn border-dashed" >Buy</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Details;