
import AboutImage from "../Assets/Images/about.png";

function App() {

  return (
    <section className='bg-[#f2f2f2] text-black'>

        <div className='mx-auto max-w-screen-2xl px-3 pb-10'>

            {/* Section Title */}
            <div className='uppercase font-normal h-10 text-xl border-b-2 border-black mb-10'>
                Our Philosophy
            </div>

            {/* Section Content */}

            {/* section header */}
            <div className="flex mb-24">

                <div className="flex flex-col md:flex-row gap-8 justify-center">

                    <div className="w-full md:w-1/3 -translate-y-5 h-fit">
                        <p className="text-4xl md:text-8xl uppercase text-center md:text-right">About<br/>us</p>
                        <p className="p-8 text-center md:py-10 md:text-left">We are a small media agency composed of a team of passionate creatives and filmakers that want to help small buisnesses and artists get their message out there.<br/><br/>At our digital design studio, we're passionate about creating beautiful, functional designs that help our clients achieve their goals. We've been in the business for years, and our team has the experience and expertise to tackle any project, big or small.</p>
                    </div>

                    <div>
                        <img src= {AboutImage} alt="Our team" className="max-h-[26rem] h-auto w-full" />
                    </div>

                </div>

            </div>

        </div>

    </section>
  );
}

export default App;
