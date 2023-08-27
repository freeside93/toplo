import React from 'react'
import maistori from '../images/maistori.jpg'
const AboutUs = () => {
  return (
    <div className='flex flex-col justify-center align-middle text-center text-base m-2 pl-2 pr-2 text-md w-full md:w-1/2'>
        <div>
                 <h1 className='text-orange-500 underline text-2xl decoration-orange-400 mb-2'>За нас:</h1>
                 <p>Ние сме млади и ентусиазирани майстори, с над 10 години опит в строителството.<br>
                 </br></p>
                 <p>Имаме над 12 индивидуално завършени къщи и множество пъти сме участвали като подизпълнители на мащабни проекти.</p>
                 <p>Залагаме на безкомпромисно качество и се стараем да изпълним всеки обект в разумни срокове.</p>
                 <p>Ако имате нужда от изпълнител, който да ви 
                    помогне в подбора на материали, да ви даде съвет относно най-доброто решение във вашата ситуация,
                     не се безпокойто, да се свържете с нас.</p>
                
        </div>
        <div>
            <img src={maistori}/>
        </div>
        <div className='flex flex-col w-10/12 m-auto'>
                <div className='flex flex-row'>

                </div>
        </div>
      
    </div>
  )
}

export default AboutUs