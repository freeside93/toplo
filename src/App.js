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
    <div className='bg-gradient-to-b from-zinc-100 via-zinc-200 via-85% to-zinc-600/60'>
      {/* BLACK BACKGROUND */}
      {menuOpen && <div className='bg-black/50 fixed w-full h-screen z-10 top-0'  onClick={() => { setMenuOpen(false) }}>

      </div>}
      {/* HEADER */} 
      <header className="flex flex-row pb-2 mb-1 w-full  align-middle items-center border-b-4 rounded-md p-1 max-h-[80px] border-orange-400">
        <div className='w-4/12 '>

          <img className='object-contain w-32' src={toploLogo5} />
        </div>
        <div className='flex flex-row w-8/12 justify-end  '>
          {/* NEW SANDWICH NAVIGATION */}
          <nav className='flex flex-col relative w-8/12 items-end'>
            {!menuOpen && <AiOutlineMenuFold className='text-amber-400 cursor-pointer' size={40}
              onClick={() => { 
                console.log(menuOpen)
                setMenuOpen(true) }}
            />}
            {menuOpen && <AiOutlineMenuUnfold className='text-amber-400 z-30 invisible' size={40}
              onClick={() => { 
                console.log(menuOpen)
                setMenuOpen(false) }}
            />}
            
            {/* SIDE DRAWER */}
            
              <div className={`${menuOpen ? 'w-full' : 'w-[0px] invisible overflow-hidden' }
               bg-white   h-screen absolute z-30 -top-4 md:-top-4 -right-2 flex flex-col gap-3 items-center cursor-pointer 
                ease-in-out duration-200`}>
                <AiOutlineMenuUnfold className='text-amber-400 z-30 mt-2' size={40}
                  onClick={() => { 
                    console.log(menuOpen)
                    setMenuOpen(false) }}
                />
                <p className={`${currentPage === 'projects' ? 'underline underline-offset-2 decoration-2 decoration-orange-400 ' : 'hover:scale-105  cursor-pointer'}`}
                  onClick={() => {
                    setMenuOpen(false)
                    setCurrentPage('projects')
                  }}
                >Завършени проекти</p>
                <p className={`${currentPage === 'about us' ? 'underline underline-offset-2 decoration-2 decoration-orange-400 ' : 'hover:scale-105  cursor-pointer'}`}
                  onClick={() => {
                    setMenuOpen(false)
                    setCurrentPage('about us')
                  }}
                >За нас</p>
                <p className={`${currentPage === 'prices' ? 'underline underline-offset-2 decoration-2 decoration-orange-400 ' : 'hover:scale-105  cursor-pointer'}`}
                  onClick={() => {
                    setMenuOpen(false)
                    setCurrentPage('prices')
                  }}
                >Цени и услуги</p>
                <p className={`${currentPage === 'contacts' ? 'underline underline-offset-2 decoration-2 decoration-orange-400 ' : 'hover:scale-105  cursor-pointer'}`}
                  onClick={() => {
                    setMenuOpen(false)
                    setCurrentPage('contacts')
                  }}
                >Контакти</p>

              </div>

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
      <footer className='flex flex-row justify-items-center align-middle rounded-md
      
      border-orange-400 border-b-2 border-t-2 text-sm p-2 r mt-4 
      
      '>
        {/* <div className='w-2/12 m-auto max-w-[100px] '>
          <img src={reactivLogo} className='cursor-pointer' /> 
        </div> */}
        <div className='m-auto w-10/12 flex flex-col flex-wrap justify-center text-center items-center text-lg mb-2
        
        font-bold italic text-amber-400 mt-2 drop-shadow-md shadow-orange-400'>
        
          {currentPage === 'projects' && <h1 className=' '> ЗАЩОТО ТОПЛИНАТА Е УЮТ!</h1>}
          {currentPage === 'about us' && <h1 className=' '>ЗАЩОТО ТОПЛИНАТА Е СПОКОЙСТВИЕ!</h1>}
          {currentPage === 'contacts' && <h1 className=' '>ЗАЩОТО ТОПЛИНАТА Е КОМФОРТ!</h1>}
        </div>
        <div className='flex flex-row w-2/12 m-auto '>
          <a href="tel:+359897444606" className='m-auto w-full'><FiPhoneCall className=' text-green-400 border-2 border-green-400 rounded-full p-1 m-auto' size={35} /></a>
        </div>
      </footer>
      <div className='h-[150px]'></div>
    </div>
  );
}

export default App;
