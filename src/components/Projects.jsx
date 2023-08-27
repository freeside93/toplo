import React from 'react'
import house1 from '../images/house1.jpg'
import house2 from '../images/house2.jpg'
import house3 from '../images/house3.jpg'
import house4 from '../images/house4.jpg'
import house5 from '../images/house5.jpg'
import house6 from '../images/house6.jpg'
import house7 from '../images/house7.jpg'
import house8 from '../images/house8.jpg'
import house9 from '../images/house9.jpg'

import { MdArrowBackIos } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import { useState } from 'react'

const Projects = () => {
    const houses = [house9, house8, house1, house4, house5, house6, house7,house3, house2]
    const [currentHouse, setCurrentHouse] = useState(houses[0])
    const [houseFrom, setHouseFrom] = useState(0)
    const [houseTo, setHouseTo] = useState(3)

    function handleRightArrowClick(){
        setHouseFrom(prevValues => prevValues + 3)
        setHouseTo(prevState => prevState + 3)
    }

    function handleLeftArrowClick(){
        setHouseFrom(prevValues => prevValues - 3)
        setHouseTo(prevState => prevState- 3)
    }

    return (
        <div className='flex flex-col items-center'>
        <div >
            <h1 className='text-orange-500 underline text-2xl decoration-orange-400 mb-2'>Завършени обекти:</h1>
        </div>
  {/* BIG PHOTO PREVIEW */ }
    <div className='w-100% md:w-5/12 flex flex-row'>
        <div className='w-full relative'>
            {/* <MdArrowBackIos className='absolute top-1/2 text-orange-500 left-0.5 ' size={35} /> */}
            <img className='object-contain w-full max-h-[245px] md:max-h-[350px] lg:max-h-[450px]' src={currentHouse}></img>
            {/* <MdArrowForwardIos className='absolute top-1/2 text-orange-500 right-0.5' size={35} /> */}
        </div>
    </div>
    {/* PHOTO GALLERY */ }
  <div className='text-md'>
      <p>{(houseFrom + 1 === houses.length ) ? 'Обект' : 'Обекти' } номер {houseFrom + 1} до {(houseFrom + 1 === houses.length ) ? houseFrom + 1 :houseTo}</p>
    </div>
  <div className='w-full mt-1  flex flex-row justify-center items-center'>
    {/* left arrow for gallery */}
    <div className='w-1/12 flex '>
      {houseFrom !== 0 && 
      <MdArrowBackIos className=' text-orange-500 cursor-pointer' size={35} 
      onClick={handleLeftArrowClick}
      
      />}
    </div>
    {/* Gallery of 3 photos div */}
    <div className='grid grid-cols-3  gap-2 md:gap-12  lg:gap-32 w-10/12 m-auto '>
      {houses.slice(houseFrom, houseTo).map((house, i) =>
        <div key={i} className='cursor-pointer justify-self-center '
          onClick={() => {
            setCurrentHouse(house)

          }}            >
          <img src={house} className={` max-h-[60px] md:max-h-[100px] md:h-[160px] lg:max-h-[250px] w-full `} />
        </div>
      )}
    </div>
    {/* right arrow div for gallery */}
    <div className='w-1/12 flex'>
     {houses.length > houseTo && <MdArrowForwardIos className=' text-orange-500 cursor-pointer' size={`35`} 
        onClick={handleRightArrowClick}
     />}
    </div>

  </div>
  </div>
  )
}

export default Projects