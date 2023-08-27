import React from 'react'

const Contacts = () => {
  return (
    <div className='flex flex-col justify-center align-middle text-center m-2 pl-2 pr-2 text-md w-full md:w-1/2'>
         <h1 className='text-orange-500 underline text-2xl decoration-orange-400 mb-2'>Контакти:</h1>
            <div>
                <p>Управител: Тома Горов</p>
                <p>Телефон за връзка: <a href="tel:+359897462492">+359897462492</a></p>
            </div>
    </div>
  )
}

export default Contacts