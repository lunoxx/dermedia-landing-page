function App() {

  return (
    <section className='bg-[#f2f2f2] text-black'>

        <div className='mx-auto max-w-screen-2xl px-3 pb-36'>

            {/* Section divider */}
            <div className='border-b-2 border-black mb-10' />
        
            {/* Right Buttons */}
            <div className="flex justify-end gap-7 h-10 text-sm">
                
                <button className="border-b-0 hover:border-b-2 border-black">Home</button>

                <button className="border-b-0 hover:border-b-2 border-black flex items-center">
                    <span className="flex items-center">
                    Services
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </button>

                <button className="border-b-0 hover:border-b-2 border-black">Why Us</button>
                <button className="border-b-0 hover:border-b-2 border-black">About Us</button>
            </div>

            {/*  */}

            <div className="flex flex-col">
                <p className="capitalize text-3xl">Our Offices</p>
            </div>

        </div>

    </section>
  );
}

export default App;
