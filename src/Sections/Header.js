
import '../Assets/CSS/styles.css';

import Navbar from '../Components/Navbar';

function App() {
  return (
    <section className='main overflow-hidden'>
        <div className='mx-auto max-w-screen-2xl px-3 py-6 h-full'>

            {/*  */}
            <Navbar />

            {/* Hero text set */}
            <div className='main-text text-white flex flex-col h-full w-full justify-center items-center text-center px-9'>

                <p className='hero-text text-5xl 
                xs:text-6xl sm:text-8xl'>
                
                    Dermedia
                </p>

                <p className='hero-subtext 
                text-lg xs:text-xl sm:text-4xl'>
                    
                    Show the best of your brand
                </p>

                <button className='my-5 px-14 py-3 bg-white text-black capitalize tracking-wider font-bold
                text-sm xs:text-md sm:text-lg
                hover:bg-black/70 hover:text-white/90 transition-colors'>

                    Get a consulation
                </button>
            </div>

        </div>

    </section>
  );
}

export default App;
