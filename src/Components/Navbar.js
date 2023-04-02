

function Navbar() {
    return (

        <div className="text-white">
            
            <div className="flex flex-row justify-between min-h-full relative">
                
                {/* Logo */}
                <div className="flex font-bold text-2xl justify-self-start items-center">
                    Dermedia
                </div>

                {/* Center Buttons */}
                <div className="hidden md:flex gap-10 font-normal absolute h-full left-1/2 -translate-x-1/2">

                    <div className="flex gap-10">
                        <button className="border-b-0 hover:border-b-2">Home</button>

                        <button className="border-b-0 hover:border-b-2 flex items-center">
                            <span className="flex">
                            Services
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>

                        <button className="border-b-0 hover:border-b-2">About Us</button>

                    </div>

                </div>

                {/* Right Section Buttons */}
                <div className="hidden md:flex gap-8 items-center justify-self-end">

                    <button className="capitalize border-2 px-6 py-2 font-bold
                    hover:bg-white hover:text-black hover:border-black transition-colors">Contact us</button>

                    <button className="flex items-center">
                        <span className="flex">
                            ENG
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Navbar;