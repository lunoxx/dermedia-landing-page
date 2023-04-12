

function App() {
  return (
    <section className='bg-[#f2f2f2] text-black'>

        <div className='mx-auto max-w-screen-2xl px-3 py-36'>

            {/* Section Title */}
            <div className='uppercase font-normal h-10 text-xl border-b-2 border-black mb-10'>
                Contact US
            </div>

            {/* Section Content */}

            {/* section header */}
            <div className="flex mb-24">
                <div className="w-7/12">
                    <p className="text-8xl uppercase text-right">Have some<br/>questions left?</p>
                </div>
                <div className="w-5/12 h-auto flex items-end">
                    <p className="text-lg px-11">Fill in the form and our manager will contact you as soon as possible to discuss your projects</p>
                </div>
            </div>

            {/* brand definitions */}
            <div className="flex w-1/2">
                <form className="w-full max-w-lg">

                    <div className="-mx-3">
                        <div className="w-full px-3">
                            <label className="block capitalize tracking-wide text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
                                Full Name
                            </label>
                            <input className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="grid-first-name" type="text"/>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block capitalize tracking-wide text-gray-700 text-xs mb-2" htmlFor="grid-email">
                                E-Mail
                            </label>
                            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500" id="grid-email" type="email" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block capitalize tracking-wide text-gray-700 text-xs mb-2" htmlFor="grid-phone">
                                Phone number
                            </label>
                            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500" id="grid-phone" type="tel" />
                        </div>
                    </div>

                    <div className="-mx-3">
                        <div className="w-full px-3">
                            <label className="block capitalize tracking-wide text-gray-700 text-xs mb-2" htmlFor="grid-message">
                                Message
                            </label>
                            <input className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="grid-message" type="text"/>
                        </div>
                    </div>

                    <div className="w-full mt-8 text-center md:text-left">
                        <button className='capitalize px-20 py-2 bg-[#2E2E2E] text-white font-medium text-lg
                        hover:bg-black/70 hover:text-white/90 transition-colors'>

                            Contact Us
                        </button>
                    </div>

                </form>

            </div>


        </div>

    </section>
  );
}

export default App;
