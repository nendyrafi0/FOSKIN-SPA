import React from 'react';
import PlayStore from '../assets/img/playstore.png'

// color and image should be modified
function Home() {
  return (
    <div className='mt-8 md:p-14 lg:ps-20 p-8'>
      <div className=" md:pb-10 md:pe-14">
        <h1 className='text-5xl font-bold'>FOSKIN</h1>
        <h2 className="md:text-4xl text-3xl font-semibold mt-1">Your Personalized Acne Care App!</h2>
        <p className="text-lg mt-4">Experience a new level of skincare tailored just for you.</p>
        <div className="mt-10">
          <button className="bg-gray-900 text-white px-6 py-2 rounded-lg">Learn more</button>
        </div>
      </div>

      <div className="flex space-x-10 p-2 pb-8 mb-6 mt-6">
        <div>
          <p className="text-2xl font-bold">2.5k+</p>
          <p className="text-gray-600">Join over 50,000 satisfied users!</p>
        </div>
        <div>
          <p className="text-2xl font-bold">4.8 <i className="fas fa-star text-yellow-500"></i></p>
          <p className="text-gray-600">Rated 4.8 out of 5 stars!</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center md:justify-start md:p-2'>
        <p className='text-lg font-semibold'>Download The App Now!</p>
        <a href=''><img src={PlayStore} alt="Playstore-logo.png" className='w-52'/></a>
      </div>
    </div>
  );
}

export default Home;