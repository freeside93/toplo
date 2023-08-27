import AboutUs from './components/AboutUs'
import Projects from './components/Projects';
import Contacts from './components/Contacts'
import { useState } from 'react';
import toploLogo5 from '../src/images/toplo_logo_5.png'

function App() {
  const [currentPage, setCurrentPage] = useState('projects')


  return (
    <div>
      {/* HEADER */}
      <header className="flex flex-row mt-2 ml-2  align-middle items-center">
        <div className='w-4/12'>

          <img className='object-contain w-44' src={toploLogo5} />
        </div>
        <div className='flex flex-row w-6/12 md:justify-center mr-2 '>
          <nav className='flex flex-row gap-6 md:gap-8 ml-2 text-md md:text-xl xl:text-xl font-semibold justify-center content-center items-center'>

            <h3
              className={`${currentPage === 'projects' ? 'invisible' : 'hover:scale-125 hover:underline  hover:decoration-orange-400 cursor-pointer'}`}
              onClick={() => { setCurrentPage('projects') }}
            >
              Завършени обекти
            </h3>

            <h3 className={`${currentPage === 'about us' ? 'invisible' : 'hover:scale-125 hover:underline  hover:decoration-orange-400 cursor-pointer'}`}
              onClick={() => { setCurrentPage('about us') }}
            >
              За нас
            </h3>
            <h3 className={`${currentPage === 'contacts' ? 'invisible' : 'hover:scale-125 hover:underline hover:decoration-orange-400 cursor-pointer'}`}
              onClick={() => {
                setCurrentPage('contacts')
              }}
            >
              Контакти
            </h3>
          </nav>
        </div>
      </header>
      <main className='flex flex-col items-center italic font-semibold text-xl mt-5'>
        {/* Main Heading */}
        {currentPage === 'projects' && <Projects currentPage={currentPage} />}
        {currentPage === 'about us' && <AboutUs />}
        {currentPage === 'contacts' && <Contacts />}
      </main>
      <footer className='flex flex-row justify-center border-orange-400 border-b-2  mt-2'>
        <div>
          
        </div>
        <div>
          {currentPage === 'projects' && <h1 className='text-lg font-bold italic text-orange-400 mt-2 drop-shadow-md shadow-orange-400'>ЗAЩОТО ТОПЛИНАТА Е УЮТ!</h1>}
          {currentPage === 'about us' && <h1 className='text-lg font-bold italic text-orange-400 mt-2 drop-shadow-md shadow-orange-400'>ЗAЩОТО ТОПЛИНАТА Е СПОКОЙСТВИЕ!</h1>}
          {currentPage === 'about us' && <h1 className='text-lg font-bold italic text-orange-400 mt-2 drop-shadow-md shadow-orange-400'>ЗAЩОТО ТОПЛИНАТА Е КОМФОРТ!</h1>}
        </div>
      </footer>
    </div>
  );
}

export default App;
