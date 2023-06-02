

function App() {
  return (
    <section className='bg-[#f2f2f2] text-black'>

        <div className='mx-auto max-w-screen-2xl px-3 pb-36 md:py-36'>

            {/* Section Title */}
            <div className='uppercase font-normal h-10 text-xl border-b-2 border-black mb-10'>
                Why US
            </div>

            {/* Section Content */}

            {/* section header */}
            <div className="flex flex-col md:flex-row mb-24">
                <div className="w-full md:w-7/12">

                    <p className="uppercase
                    text-4xl text-center
                    md:text-8xl md:text-right">the team of<br/>professionals</p>
                </div>

                <div className="flex h-auto items-center
                w-full p-8 text-center
                md:w-5/12 md:p-0 md:text-left">
                    <p className="text-lg md:px-11">At our digital design studio, we understand that you want a hassle-free experience when it comes to bringing your ideas to life. That's why we prioritize simplicity in everything we do. Our goal is to create a seamless process that results in a product that perfectly aligns with your vision.</p>
                </div>
            </div>

            {/* brand definitions */}
            <div className="flex w-full 
            
            items-start
            md:items-end flex-col gap-4">

                {/* 1 */}
                <div className="flex pb-8 border-b-2 border-b-black/40
                w-full
                md:w-1/2">

                    {/* icon */}
                    <div className="w-1/12 pt-2 md:pt-1">
                        <svg width="28" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-11">
                            <path d="M16.2222 16.0752H23.3935L2.62999 41.6126L8.47579 23.5165L8.68696 22.8628H8H0.744709L9.89126 0.5H26.995L15.8234 15.2736L15.2173 16.0752H16.2222Z" stroke="#2E2E2E"/>
                        </svg>
                    </div>
                    
                    {/* content */}
                    <div className="w-11/12">

                        <p className="font-bold text-3xl uppercase">SIMPLICITY</p>
                        <p className="w-full md:w-1/2 font-light text-lg mt-3">No headaches, we prioritize a hassle-free experience, delivering the product as you describe.</p>

                    </div>
                </div>

                {/* 2 */}
                <div className="flex pb-8 border-b-2 border-b-black/40 mt-10
                w-full
                md:w-1/2">

                    {/* icon */}
                    <div className="w-1/12 pt-2 md:pt-1">
                        <svg width="28" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-11">
                            <path d="M16.2222 16.0752H23.3935L2.62999 41.6126L8.47579 23.5165L8.68696 22.8628H8H0.744709L9.89126 0.5H26.995L15.8234 15.2736L15.2173 16.0752H16.2222Z" stroke="#2E2E2E"/>
                        </svg>
                    </div>

                    {/* content */}
                    <div className="w-11/12">

                        <p className="font-bold text-3xl uppercase">Innovation</p>
                        <p className="w-full md:w-1/2 font-light text-lg mt-3">We incorporate cutting-edge tools like AI to provide the best, fastest, and most efficient results for our clients.</p>

                    </div>
                </div>

                {/* 3 */}
                <div className="flex pb-8 border-b-2 border-b-black/40 mt-10
                w-full
                md:w-1/2">

                    {/* icon */}
                    <div className="w-1/12 pt-2 md:pt-1">
                        <svg width="28" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-11">
                            <path d="M16.2222 16.0752H23.3935L2.62999 41.6126L8.47579 23.5165L8.68696 22.8628H8H0.744709L9.89126 0.5H26.995L15.8234 15.2736L15.2173 16.0752H16.2222Z" stroke="#2E2E2E"/>
                        </svg>
                    </div>

                    {/* content */}
                    <div className="w-11/12">

                        <p className="font-bold text-3xl uppercase">Compromise</p>
                        <p className="w-full md:w-1/2  font-light text-lg mt-3">We stand behind our work and offer a unique compromise - if we don't deliver the agreed result, you don't pay.</p>

                    </div>
                </div>

            </div>


        </div>

    </section>
  );
}

export default App;
