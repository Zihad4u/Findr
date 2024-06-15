

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full h-[140px] sm:h-[327px]  rounded-lg">
                <div id="slide1" className=" sm:h-full h-[140px] carousel-item bg-black  relative w-full">
                    <img src="https://i.ibb.co/4VF6tcF/1678884803282.jpg" className="w-full object-cover opacity-60" />
                    <div className="absolute  ml-[80px] lg:mt-[100px] mt-9 sm:ml-[100px] sm:mt-10 md:ml-[100px] md:mt-[70px]  ">
                        <p className="text-white lg:text-[35px] sm:text-[20px] md:text-[25px] text-[15px] font-medium animate__animated animate__fadeInUpBig ">Discover the future of AI with ChatGPT-4.</p>
                        <p className="text-white  lg:text-[30px] md:text-[25px] sm:text-[18px] mt-2 text-[10px] font-medium animate__animated animate__fadeInUpBig "> Transform your interactions today</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item object-cover relative bg-black w-full h-full">
                    <img src="https://i.ibb.co/tCvD1H8/wallpaperflare-com-wallpaper.jpg" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute ml-[80px] lg:mt-[100px] mt-9 sm:ml-[100px] sm:mt-10 md:ml-[100px] md:mt-[70px]  ">
                        <p className="text-white animate__animated animate__fadeInUpBig lg:text-[35px] sm:text-[20px] md:text-[25px] text-[15px] font-medium ">Pubg new record</p>
                        <p className="text-white lg:text-[30px] md:text-[25px] sm:text-[18px] mt-2 text-[10px] font-medium animate__animated animate__fadeInUpBig ">Pubg game hit 10 million download record</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative bg-black w-full">
                    <img src="https://i.ibb.co/vXsDZtJ/rahadiansyah-44-GUFa-lts-unsplash.jpg" className="w-full opacity-60 object-cover " />
                    <div className="absolute ml-[80px] lg:mt-[100px] mt-9 sm:ml-[100px] sm:mt-10 md:ml-[100px] md:mt-[70px]  ">
                        <p className="text-white lg:text-[35px] sm:text-[20px] md:text-[25px] text-[15px] font-medium animate__animated animate__fadeInUpBig ">Best video edit software</p>
                        <p className="text-white lg:text-[30px] md:text-[25px] sm:text-[18px] mt-2 text-[10px] font-medium animate__animated animate__fadeInUpBig ">Premier pro is one of the best video editor software</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;