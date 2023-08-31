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
  const houses = [house9, house8, house1, house4, house5, house6, house7, house3, house2]
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
    <div className='flex flex-col items-center'>
      <div >
        <h1 className=' text-2xl b-2 -mt-3  mb-2'>Завършени обекти:</h1>
      </div>
      {/* BIG PHOTO PREVIEW */}
      <div className='w-full md:w-5/12 flex flex-row ease-in-out'>
        <div
          className={`w-full h-[300px] md:h-[350px] relative translate-x-0 rounded-lg`}>
          {showNewHouse && <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}

            className='rounded-xl shadow-teal-900 shadow-xl w-full md:max-h-[350px] lg:max-h-[450px]' src={currentHouse}>

          </motion.img>}


        </div>
      </div>
      {/* PHOTO GALLERY */}
      <div className='h-[180px] flex flex-col justify-center items-center'>
        <div className='text-xl mt-4 mb-2'>
          <p>{(houseFrom + 1 === houses.length) ? 'Обект' : 'Обекти'} номер {houseFrom + 1} до {(houseFrom + 1 === houses.length) ? houseFrom + 1 : houseTo}</p>
        </div>
        <div className='w-full m-auto  flex flex-row mt-2 items-center'>
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
          {animate3Houses && <motion.div
            initial={{ x: - 100 }}
            animate={{ x: 0 }}
            className='grid grid-cols-3 gap-1 md:gap-12  lg:gap-32 w-10/12 m-auto rounded-xl'>
            {houses.slice(houseFrom, houseTo).map((house, i) =>
              <div key={i} className='cursor-pointer justify-self-center '
                onClick={() => {
                  setCurrentHouse(house)
                  animateHouse()

                }}            >
                <img src={house} className={`object-cover max-h-[60px] md:max-h-[100px] md:h-[160px] lg:max-h-[250px] w-full `} />
              </div>
            )}
          </motion.div>}
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
        <div>
          <article className='m-auto text-center w-full text-base mt-3'>
            Разгледайте снимките, за да се убедите в резултатите от нашата работа!
          </article>
        </div>
      </div>
    </div>
  )
}

export default Projects