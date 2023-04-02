
import '../Assets/CSS/styles.css';

import { ReactComponent  as MacBook } from '../Assets/Images/macbook16.svg';

function App() {
  return (
    <section className='bg-[#f2f2f2] text-black'>

        <div className='mx-auto max-w-screen-2xl px-3 py-36 '>

            {/* Section Title */}
            <div className='uppercase font-normal h-10 text-xl border-b-2 border-black mb-10'>
                Services
            </div>

            {/* Service types */}
            <div className='flex flex-col md:flex-row'>
                
                {/* Left image */}
                <div className='w-full md:w-2/5 overflow-hidden'>
                    <MacBook/>
                </div>

                {/* Right section */}
                <div className='w-full md:w-3/5 flex flex-col gap-8'>

                    {/* Service 1 */}
                    <div className='pb-8 flex flex-row items-center gap-8 border-b-2'>

                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M18.9895 0.509382C18.9899 0.505931 18.9903 0.503089 18.9908 0.500807C18.9934 0.500339 18.9965 0.5 19 0.5C19.0035 0.5 19.0066 0.500329 19.0092 0.500797C19.0096 0.503079 19.0101 0.505931 19.0105 0.509382L19.6083 5.54745C20.4075 12.2825 25.7175 17.5925 32.4525 18.3917L37.4906 18.9895C37.4906 18.9895 37.4906 18.9895 37.4906 18.9895C37.4941 18.9899 37.4969 18.9904 37.4992 18.9908C37.4997 18.9934 37.5 18.9965 37.5 19C37.5 19.0035 37.4997 19.0066 37.4992 19.0092C37.4969 19.0096 37.4941 19.0101 37.4906 19.0105C37.4906 19.0105 37.4906 19.0105 37.4906 19.0105L32.4525 19.6083C25.7175 20.4075 20.4075 25.7175 19.6083 32.4525L19.0105 37.4906C19.0105 37.4906 19.0105 37.4906 19.0105 37.4906C19.0101 37.4941 19.0096 37.4969 19.0092 37.4992C19.0066 37.4997 19.0035 37.5 19 37.5C18.9965 37.5 18.9934 37.4997 18.9908 37.4992C18.9904 37.4969 18.9899 37.4941 18.9895 37.4906C18.9895 37.4906 18.9895 37.4906 18.9895 37.4906L18.3917 32.4525C17.5925 25.7175 12.2825 20.4075 5.54745 19.6083L0.509382 19.0105C0.505931 19.0101 0.503089 19.0097 0.500807 19.0092C0.500339 19.0066 0.5 19.0035 0.5 19C0.5 18.9965 0.500329 18.9934 0.500797 18.9908C0.503079 18.9904 0.505931 18.9899 0.509382 18.9895L5.54745 18.3917C12.2825 17.5925 17.5925 12.2825 18.3917 5.54745L18.9895 0.509382Z" stroke="#2E2E2E"/>
                        </svg>

                        <div>
                            <button className='font-bold text-3xl uppercase'>
                                <span className='flex items-center'>
                                    Websites
                                        
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6 rotate-180">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    
                                </span> 
                            </button>

                            {/* Dropdown content for service 1 */}
                            <div className="leading-7 text-lg mt-5">
                                <p>Real Estate Agencies</p>
                                <p>Small Businesses; Restaurants</p>
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className='pb-8 flex flex-row items-center gap-8 border-b-2'>

                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M18.9895 0.509382C18.9899 0.505931 18.9903 0.503089 18.9908 0.500807C18.9934 0.500339 18.9965 0.5 19 0.5C19.0035 0.5 19.0066 0.500329 19.0092 0.500797C19.0096 0.503079 19.0101 0.505931 19.0105 0.509382L19.6083 5.54745C20.4075 12.2825 25.7175 17.5925 32.4525 18.3917L37.4906 18.9895C37.4906 18.9895 37.4906 18.9895 37.4906 18.9895C37.4941 18.9899 37.4969 18.9904 37.4992 18.9908C37.4997 18.9934 37.5 18.9965 37.5 19C37.5 19.0035 37.4997 19.0066 37.4992 19.0092C37.4969 19.0096 37.4941 19.0101 37.4906 19.0105C37.4906 19.0105 37.4906 19.0105 37.4906 19.0105L32.4525 19.6083C25.7175 20.4075 20.4075 25.7175 19.6083 32.4525L19.0105 37.4906C19.0105 37.4906 19.0105 37.4906 19.0105 37.4906C19.0101 37.4941 19.0096 37.4969 19.0092 37.4992C19.0066 37.4997 19.0035 37.5 19 37.5C18.9965 37.5 18.9934 37.4997 18.9908 37.4992C18.9904 37.4969 18.9899 37.4941 18.9895 37.4906C18.9895 37.4906 18.9895 37.4906 18.9895 37.4906L18.3917 32.4525C17.5925 25.7175 12.2825 20.4075 5.54745 19.6083L0.509382 19.0105C0.505931 19.0101 0.503089 19.0097 0.500807 19.0092C0.500339 19.0066 0.5 19.0035 0.5 19C0.5 18.9965 0.500329 18.9934 0.500797 18.9908C0.503079 18.9904 0.505931 18.9899 0.509382 18.9895L5.54745 18.3917C12.2825 17.5925 17.5925 12.2825 18.3917 5.54745L18.9895 0.509382Z" stroke="#2E2E2E"/>
                        </svg>

                        <div>
                            <button className='font-bold text-3xl uppercase'>
                                <span className='flex items-center'>
                                    Video
                                        
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    
                                </span> 
                            </button>

                            {/* Dropdown content for service 2 */}
                            <div className="leading-7 text-lg mt-5
                            hidden">
                                <p></p>
                            </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className='pb-8 flex flex-row items-center gap-8 border-b-2'>

                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M18.9895 0.509382C18.9899 0.505931 18.9903 0.503089 18.9908 0.500807C18.9934 0.500339 18.9965 0.5 19 0.5C19.0035 0.5 19.0066 0.500329 19.0092 0.500797C19.0096 0.503079 19.0101 0.505931 19.0105 0.509382L19.6083 5.54745C20.4075 12.2825 25.7175 17.5925 32.4525 18.3917L37.4906 18.9895C37.4906 18.9895 37.4906 18.9895 37.4906 18.9895C37.4941 18.9899 37.4969 18.9904 37.4992 18.9908C37.4997 18.9934 37.5 18.9965 37.5 19C37.5 19.0035 37.4997 19.0066 37.4992 19.0092C37.4969 19.0096 37.4941 19.0101 37.4906 19.0105C37.4906 19.0105 37.4906 19.0105 37.4906 19.0105L32.4525 19.6083C25.7175 20.4075 20.4075 25.7175 19.6083 32.4525L19.0105 37.4906C19.0105 37.4906 19.0105 37.4906 19.0105 37.4906C19.0101 37.4941 19.0096 37.4969 19.0092 37.4992C19.0066 37.4997 19.0035 37.5 19 37.5C18.9965 37.5 18.9934 37.4997 18.9908 37.4992C18.9904 37.4969 18.9899 37.4941 18.9895 37.4906C18.9895 37.4906 18.9895 37.4906 18.9895 37.4906L18.3917 32.4525C17.5925 25.7175 12.2825 20.4075 5.54745 19.6083L0.509382 19.0105C0.505931 19.0101 0.503089 19.0097 0.500807 19.0092C0.500339 19.0066 0.5 19.0035 0.5 19C0.5 18.9965 0.500329 18.9934 0.500797 18.9908C0.503079 18.9904 0.505931 18.9899 0.509382 18.9895L5.54745 18.3917C12.2825 17.5925 17.5925 12.2825 18.3917 5.54745L18.9895 0.509382Z" stroke="#2E2E2E"/>
                        </svg>

                        <div>
                            <button className='font-bold text-3xl uppercase'>
                                <span className='flex items-center'>
                                    Mobile apps
                                        
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    
                                </span> 
                            </button>

                            {/* Dropdown content for service 3 */}
                            <div className="leading-7 text-lg mt-5
                            hidden">
                                <p></p>
                            </div>
                        </div>
                    </div>

                                
                    <div className="w-full mt-5 text-center md:text-left">
                        <button className='capitalize px-16 py-2 bg-[#2E2E2E] text-white font-bold text-lg
                        hover:bg-black/70 hover:text-white/90 transition-colors'>

                            Create a project
                        </button>
                    </div>

                </div>
                {/* End of right section */}

            </div>
            {/* End of service types */}


            {/* What we offer? */}

            <div className="w-full flex flex-row mt-14">

                <div className="flex w-[55%] justify-end pr-10 text-right uppercase text-8xl">
                    <p className="w-2/3">
                        <span>What <br/>we offer</span>
                    </p>
                </div>

                <div className="flex w-[45%] pt-2 pr-20 text-lg leading-8">
                    <p>At our studio, we're dedicated to staying on top of the latest trends and technologies. We believe in continuous learning and improvement, and we're always exploring new ways to push the boundaries of digital design. With our focus on simplicity, innovation, and compromise, we're confident that we can deliver the best possible results for our clients.</p>
                </div>
            </div>

        </div>

    </section>
  );
}

export default App;
