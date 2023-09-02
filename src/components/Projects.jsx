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
import { motion, AnimatePresence } from "framer-motion"

import { MdArrowBackIos } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import { useState } from 'react'

const Projects = () => {
  const houses =[{
    houseImg: house8,
    houseName: 'Къща в с. Първенец',
    houseNumber: 1
  },
  {houseImg: house9,
  houseName: 'Къща в с.Първенец',
  houseNumber:2},
  {houseImg: house3,
  houseName: 'Къща в гр. Пловдив, кв. Прослав',
  houseNumber: 3,
},
{houseImg: house4,
houseName: 'Къща в гр. Пловдив, кв. Прослав',
houseNumber: 4,
},
{houseImg: house5,
houseName: 'Къща в гр. Пловдив, кв. Прослав',
houseNumber: 5,
},
{houseImg: house6,
houseName: 'Къща в гр. Пловдив, кв. Прослав',
houseNumber: 6,
},
{houseImg: house7,
houseName: 'Къща в гр. Пловдив, кв. Прослав',
houseNumber: 7,
},
{houseImg: house2,
houseName: 'Къща в гр. Пловдив, кв. Прослав',
houseNumber: 8,
},
{houseImg: house1,
houseName: 'Къща в гр. Пловдив, кв. Прослав',
houseNumber: 9,
}
]
  // const houses = [house9, house8, house1, house4, house5, house6, house7, house3, house2]
  const [currentHouse, setCurrentHouse] = useState(houses[0])
  const [houseFrom, setHouseFrom] = useState(0)
  const [houseTo, setHouseTo] = useState(3)
  const [showNewHouse, setShowNewHouse] = useState(true)
  const [animate3Houses, setAnimate3Houses] = useState(true)

  function setTrueHouse() {
    setShowNewHouse((prevState) => {
      setShowNewHouse(!prevState)
    })
  }
  function animateHouse() {
    setShowNewHouse((prevState) => {
      setShowNewHouse(false)
    })
    console.log(showNewHouse)
    setTimeout(setTrueHouse, 50)

  }
  function setTheRightHouses() {
    setAnimate3Houses((prevState) =>
      setAnimate3Houses(!prevState)
    )
  }
  function animatethe3Houses() {
    setAnimate3Houses(false)
    console.log('animate 3 houses')
    console.log(animate3Houses)
    setTimeout(setTheRightHouses, 50)
    console.log(animate3Houses)
  }

  function handleRightArrowClick() {
    setHouseFrom(prevValues => prevValues + 3)
    setHouseTo(prevState => prevState + 3)
  }

  function handleLeftArrowClick() {
    setHouseFrom(prevValues => prevValues - 3)
    setHouseTo(prevState => prevState - 3)
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <div >
        <h1 className='w-full text-2xl b-2 -mt-3 underline  mb-2'>Завършени обекти:</h1>
      </div>
      {/* BIG PHOTO PREVIEW */}
      <div className=' h-[340px] md:max-h-[350px] lg:max-h-[450px] w-full sm:w-6/12 md:w-4/12 flex flex-col ease-in-out justify-center '>
      <p className='text-xl text-center'>{currentHouse.houseNumber}</p>
        <div
          className={`w-full h-full  translate-x-0 rounded-lg flex flex-col`}>
           
          {showNewHouse && <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}

            className='rounded-xl object-fill shadow-teal-900 shadow-lg w-full h-full ' src={currentHouse.houseImg}>

          </motion.img>}
        
        </div>
        <p className='ml-2 text-lg mb-2 md:hidden'>{currentHouse.houseName}</p>
          <p className='ml-2 text-lg hidden md:flex'>{currentHouse.houseName}</p>
      
      </div>
      {/* PHOTO GALLERY */}
      <div className=' flex flex-col justify-center items-center h-[160px] mt-2 md:h-[240px] md:mt-6'>
        <div className='text-xl -mb-1'>
          <p>{(houseFrom + 1 === houses.length) ? 'Обект' : 'Обекти'} номер {houseFrom + 1} до {(houseFrom + 1 === houses.length) ? houseFrom + 1 : houseTo}</p>
        </div>
        <div className='w-full m-auto  flex flex-row mt-0 items-center h-[200px] md:h-[220px]'>
          {/* left arrow for gallery */}
          <div className='w-1/12 flex justify-end ml-2 -mr-4'>
            {houseFrom !== 0 &&
              <MdArrowBackIos className=' text-amber-400 cursor-pointer ' size={35}
                onClick={() => {
                  animatethe3Houses()
                  handleLeftArrowClick()
                }}
              />}
          </div>
          {/* Gallery of 3 photos div */}
                <div className='w-[325px] md:w-10/12'>
          {animate3Houses && <motion.div
            initial={{ x: - 100 }}
            animate={{ x: 0 }}
            transition={{duration:0.6}}
            className='grid grid-cols-3 gap-1 md:gap-12  lg:gap-32 w-10/12 m-auto rounded-xl h-[60px] md:h-[160px]'>
            {houses.slice(houseFrom, houseTo).map((house, i) =>
              <div key={i} className='cursor-pointer justify-self-center '
                onClick={() => {
                  setCurrentHouse(house)
                  animateHouse()

                }}            >
                <img src={house.houseImg} className={`object-cover max-h-[60px] md:max-h-[100px] md:h-[160px] lg:max-h-[250px] w-full active:scale-125`} />
              </div>
            )}
          </motion.div>}
          </div>
          
          {/* right arrow div for gallery */}
          <div className='w-1/12 flex justify-start'>
            {houses.length > houseTo && <MdArrowForwardIos className=' text-amber-400 cursor-pointer' size={35}
              onClick={() => {
                handleRightArrowClick()
                animatethe3Houses()
              }}
            />}
          </div>

        </div>
        <div className=' mb-2'>
          <article className='m-auto text-center w-full text-base md:text-lg mt-3'>
            Разгледайте снимките, за да се убедите в резултатите от нашата работа!
          </article>
        </div>
      </div>
    </div>
  )
}

export default Projects