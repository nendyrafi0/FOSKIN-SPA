import React from 'react';

import PlayStore from '../assets/img/playstore.png'

function Home() {

  return (
    <div className='mt-8 md:p-14 lg:ps-20 p-8'>
      <div className=" md:pb-10 md:pe-14">
        <h1 className='text-5xl font-bold text-black'>FOSKIN</h1>
        <h2 className="md:text-4xl text-3xl font-semibold mt-1 text-black">Your Personalized Acne Care App!</h2>
        <p className="text-lg mt-4 text-grey-500">Experience a new level of skincare tailored just for you.</p>
        <div className="mt-10">
          <a href="#Features" className="bg-black hover:text-gray-200 text-white px-10 py-4 hover:bg-grey-800 rounded-lg transition duration-200">
            Learn more
          </a>
        </div>
      </div>

      <div className="flex space-x-10 p-2 pb-8 mb-6 mt-6">
        <div>
          <p className="text-2xl font-bold text-black">2.5k+</p>
          <p className="text-grey-500">Join over 50,000 satisfied users!</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-black">4.8 <i className="fas fa-star text-yellow-500"></i></p>
          <p className="text-grey-500">Rated 4.8 out of 5 stars!</p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:p-2'>
        <p className='text-xl font-semibold text-black'>Download The App Now!</p>
        <a href='https://play.google.com' target="_blank" rel="noopener noreferrer"><img src={PlayStore} alt="Playstore-logo.png" className='w-52'/></a>
      </div>
    </div>
  );
}

export default Home;