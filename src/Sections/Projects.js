
import '../Assets/CSS/styles.css';

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
                    <div className="">

                    </div>
                </div>


                {/* 02 / VIDEOS */}
                <div className="border-b-2 pb-9">
                    <p className='text-3xl font-bold text-black/20'>
                        02/
                        <span className='text-black uppercase'> VIDEOS</span>
                    </p>

                    {/* Carousel with objects */}
                    <div className="">

                    </div>
                </div>

                {/* 03 / VIDEOS */}
                <div className="border-b-2 pb-9">
                    <p className='text-3xl font-bold text-black/20'>
                        03/
                        <span className='text-black uppercase'> Mobile app</span>
                    </p>

                    {/* Carousel with objects */}
                    <div className="">

                    </div>
                </div>

            </div>
            {/* End of project types */}

        </div>

    </section>
  );
}

export default App;
