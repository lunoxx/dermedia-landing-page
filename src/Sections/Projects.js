
// import '../Assets/CSS/styles.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Image1 from '../Assets/Images/services/websites/img.png';

import { AiOutlineCaretLeft } from 'react-icons/ai';
import { AiOutlineCaretRight } from 'react-icons/ai';

function App() {
  return (
    <section className='bg-[#f2f2f2] text-black'>

        <div className='mx-auto max-w-screen-2xl px-3 py-36'>

            {/* Section Title */}
            <div className='uppercase font-normal h-10 text-xl border-b-2 border-black mb-10'>
                Our Projects
            </div>

            {/* Projects types */}
            <div className='flex flex-col gap-14'>
                
                {/* 01 / Websites */}
                <div className="border-b-2 pb-9">
                    <p className='text-3xl font-bold text-black/20'>
                        01/
                        <span className='text-black uppercase'> WEBSITES</span>
                    </p>

                    {/* Carousel with objects */}
                    <div className="my-8 flex">
                        <div className="w-1/2">
                            <Carousel 

                                className='relative'
                                swipeable emulateTouch infiniteLoop interval="5000" 
                                autoPlay={false} showThumbs={false} showIndicators={false}
                                
                                // preview icon
                                renderArrowPrev={(clickHandler, hasPrev) => {
                                    return (
                                    <div
                                            className={`${
                                            hasPrev ? "absolute" : "hidden"
                                            } top-0 bottom-0 left-0 flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20`}
                                            onClick={clickHandler}
                                        >
                                            <AiOutlineCaretLeft className="w-9 h-9 text-white" />
                                    </div>
                                    );
                                }}
                                
                                renderArrowNext={(clickHandler, hasNext) => {
                                    return (
                                        <div
                                            className={`${
                                                hasNext ? "absolute" : "hidden"
                                            } top-0 bottom-0 right-0 flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20`}
                                            onClick={clickHandler}
                                            >
                                            <AiOutlineCaretRight className="w-9 h-9 text-white" />
                                        </div>
                                    );
                                }}

                                >
                            
                                <div className=''>
                                    <img src = {Image1} alt = "project 1" className='shadow-xl' />

                                    <div className='text-left py-6 px-9 bg-gray-200/80 rounded-b-lg'>
                                        <p className='text-2xl mb-2'>Project Name</p>
                                        <p className='text-lg'>About the project</p>
                                    </div>
                                </div>

                                <div>
                                    <img src = {Image1} alt = "s" />
                                </div>

                                <div>
                                    <img src = {Image1} alt = "d" />
                                </div>
                            </Carousel>
                        </div>

                        {/* Section Description */}
                        <div className='w-1/2 px-20 text-8xl font-bold italic text-center opacity-10 h-96 uppercase flex items-center justify-center hover:-skew-y-2 skew-y-1 hover:transition-all duration-500'>
                            <p>We make<br/>websites<br/>that shine</p>
                        </div>
                    </div>
                </div>


                {/* 02 / VIDEOS */}
                <div className="border-b-2 pb-9">
                    <p className='text-3xl font-bold text-black/20'>
                        02/
                        <span className='text-black uppercase'> VIDEOS</span>
                    </p>

                    {/* Carousel with objects */}
                    <div className="my-8 flex">
                        
                        {/* Section Description */}
                        <div className='w-1/2 px-20 text-8xl font-bold italic text-center opacity-10 h-96 uppercase flex items-center justify-center hover:skew-y-2 -skew-y-1 hover:transition-all duration-500'>
                            <p>Our videos<br/>are<br/>insane!</p>
                        </div>

                        <div className='w-1/2'>
                                
                            <Carousel 

                                className='relative'
                                swipeable emulateTouch infiniteLoop interval="5000" 
                                autoPlay={false} showThumbs={false} showIndicators={false}
                                
                                // preview icon
                                renderArrowPrev={(clickHandler, hasPrev) => {
                                    return (
                                    <div
                                            className={`${
                                            hasPrev ? "absolute" : "hidden"
                                            } top-0 bottom-0 left-0 flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20`}
                                            onClick={clickHandler}
                                        >
                                            <AiOutlineCaretLeft className="w-9 h-9 text-white" />
                                    </div>
                                    );
                                }}
                                
                                renderArrowNext={(clickHandler, hasNext) => {
                                    return (
                                        <div
                                            className={`${
                                                hasNext ? "absolute" : "hidden"
                                            } top-0 bottom-0 right-0 flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20`}
                                            onClick={clickHandler}
                                            >
                                            <AiOutlineCaretRight className="w-9 h-9 text-white" />
                                        </div>
                                    );
                                }}

                                >
                            
                                <div className=''>
                                    <img src = {Image1} alt = "project 1" className='shadow-xl' />

                                    <div className='text-left py-6 px-9 bg-gray-200/80 rounded-b-lg'>
                                        <p className='text-2xl mb-2'>Project Name</p>
                                        <p className='text-lg'>About the project</p>
                                    </div>
                                </div>

                                <div>
                                    <img src = {Image1} alt = "s" />
                                </div>

                                <div>
                                    <img src = {Image1} alt = "d" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>

                {/* 03 / VIDEOS */}
                <div className="border-b-2 pb-9">
                    <p className='text-3xl font-bold text-black/20'>
                        03/
                        <span className='text-black uppercase'> Mobile app</span>
                    </p>

                    {/* Carousel with objects */}
                    
                    <div className="my-8 flex">
                        <div className='w-1/2'>
                            <Carousel 

                                className='relative'
                                swipeable emulateTouch infiniteLoop interval="5000" 
                                autoPlay={false} showThumbs={false} showIndicators={false}
                                
                                // preview icon
                                renderArrowPrev={(clickHandler, hasPrev) => {
                                    return (
                                    <div
                                            className={`${
                                            hasPrev ? "absolute" : "hidden"
                                            } top-0 bottom-0 left-0 flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20`}
                                            onClick={clickHandler}
                                        >
                                            <AiOutlineCaretLeft className="w-9 h-9 text-white" />
                                    </div>
                                    );
                                }}
                                
                                renderArrowNext={(clickHandler, hasNext) => {
                                    return (
                                        <div
                                            className={`${
                                                hasNext ? "absolute" : "hidden"
                                            } top-0 bottom-0 right-0 flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20`}
                                            onClick={clickHandler}
                                            >
                                            <AiOutlineCaretRight className="w-9 h-9 text-white" />
                                        </div>
                                    );
                                }}

                                >
                            
                                <div className=''>
                                    <img src = {Image1} alt = "project 1" className='shadow-xl' />

                                    <div className='text-left py-6 px-9 bg-gray-200/80 rounded-b-lg'>
                                        <p className='text-2xl mb-2'>Project Name</p>
                                        <p className='text-lg'>About the project</p>
                                    </div>
                                </div>

                                <div>
                                    <img src = {Image1} alt = "s" />
                                </div>

                                <div>
                                    <img src = {Image1} alt = "d" />
                                </div>
                            </Carousel>
                        </div>
                        
                        {/* Section Description */}
                        <div className='w-1/2 px-20 text-8xl font-bold italic text-center opacity-10 h-96 uppercase flex items-center justify-center hover:-skew-y-2 skew-y-1 hover:transition-all duration-500'>
                            <p>Yes, we do<br/>that for<br/>you too!</p>
                        </div>

                    </div>
                </div>

            </div>
            {/* End of project types */}

        </div>

    </section>
  );
}

export default App;
