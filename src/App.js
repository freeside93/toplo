import AboutUs from './components/AboutUs'
import Projects from './components/Projects';
import Contacts from './components/Contacts'
import { useState } from 'react';
import toploLogo5 from '../src/images/toplo_logo_5.png'
import reactivLogo from '../src/images/reactivLogo.png'
import { FiPhoneCall } from 'react-icons/fi'
import { FaTemperatureHigh } from 'react-icons/fa'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { AiOutlineMenuUnfold } from 'react-icons/ai'

function App() {
  const [currentPage, setCurrentPage] = useState('projects')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      {/* HEADER */} {menuOpen && <div className='bg-black/50 fixed w-full h-screen z-10 top-0'>

      </div>}
      <header className="flex flex-row mt-2 ml-2  align-middle items-center border-b-4 rounded-md p-1 max-h-[80px] border-orange-400">
        <div className='w-4/12'>

          <img className='object-contain w-32' src={toploLogo5} />
        </div>
        <div className='flex flex-row w-8/12 justify-end  '>
          {/* NEW SANDWICH NAVIGATION */}
          <nav className='flex flex-col relative w-8/12 items-end'>
            {!menuOpen && <AiOutlineMenuFold className='text-orange-300 cursor-pointer' size={40}
              onClick={() => { setMenuOpen(true) }}
            />}
            {menuOpen && <AiOutlineMenuUnfold className='text-orange-300 z-30 invisible' size={40}
              onClick={() => { setMenuOpen(false) }}
            />}
            {menuOpen &&
              // SIDE DRAWER
              <div className='bg-white w-full  h-screen absolute z-30 -top-8 md:-top-12 -right-2 flex flex-col gap-3 items-center cursor-pointer'>
                <AiOutlineMenuUnfold className='text-orange-300 z-30 mt-2' size={40}
                  onClick={() => { setMenuOpen(false) }}
                />
                <p className={`${currentPage === 'projects' ? 'underline underline-offset-2 decoration-2 decoration-orange-400 ' : 'hover:scale-105  cursor-pointer'}`}                
                  onClick={() => { 
                    setMenuOpen(false)
                    setCurrentPage('projects') }}
                >Завършени проекти</p>
                 <p className={`${currentPage === 'about us' ? 'underline underline-offset-2 decoration-2 decoration-orange-400 ' : 'hover:scale-105  cursor-pointer'}`}   
                  onClick={() => { 
                    setMenuOpen(false)
                    setCurrentPage('about us') }}
                >За нас</p>
                <p className={`${currentPage === 'prices' ? 'underline underline-offset-2 decoration-2 decoration-orange-400 ' : 'hover:scale-105  cursor-pointer'}`}   
                  onClick={() => { 
                    setMenuOpen(false)
                    setCurrentPage('prices') }}
                >Цени и услуги</p>
                <p className={`${currentPage === 'contacts' ? 'underline underline-offset-2 decoration-2 decoration-orange-400 ' : 'hover:scale-105  cursor-pointer'}`}   
                  onClick={() => { 
                    setMenuOpen(false)
                    setCurrentPage('contacts') }}
                >Контакти</p>

                </div>}
           
          </nav>
        </div>
      </header>
      <main className='flex flex-col items-center italic font-semibold text-xl mt-5'>
        {/* Main Heading */}
        {currentPage === 'projects' && <Projects currentPage={currentPage} />}
        {currentPage === 'about us' && <AboutUs />}
        {currentPage === 'contacts' && <Contacts />}
      </main>
      {/* FOOTER */}
      <footer className='flex flex-row justify-items-center align-middle border-orange-400 border-b-2 border-t-2 text-sm p-2 r mt-4'>
        <div className='w-2/12 m-auto max-w-[100px] '>
          <img src={reactivLogo} className='cursor-pointer' />
        </div>
        <div className='m-auto w-8/12 flex flex-row flex-wrap justify-center text-center items-center'>

          {currentPage === 'projects' && <h1 className=' font-bold italic text-orange-400 mt-2 drop-shadow-md shadow-orange-400'>ЗAЩОТО ТОПЛИНАТА Е УЮТ!</h1>}
          {currentPage === 'about us' && <h1 className=' font-bold italic text-orange-400 mt-2 drop-shadow-md shadow-orange-400'>ЗAЩОТО ТОПЛИНАТА Е СПОКОЙСТВИЕ!</h1>}
          {currentPage === 'contacts' && <h1 className=' font-bold italic text-orange-400 mt-2 drop-shadow-md shadow-orange-400'>ЗAЩОТО ТОПЛИНАТА Е КОМФОРТ!</h1>}
        </div>
        <div className='flex flex-row w-2/12 m-auto '>
          <a href="tel:+359897462492" className='m-auto w-full'><FiPhoneCall className=' text-green-400 border-2 border-green-800 rounded-full p-1 m-auto' size={30} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
