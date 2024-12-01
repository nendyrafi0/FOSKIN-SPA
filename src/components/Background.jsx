import React from 'react'

import Bangkit from '../assets/img/bangkit.webp'
import Logo1 from '../assets/img/svg/logo-1.svg'
import Logo2 from '../assets/img/svg/logo-2.svg'
import Logo3 from '../assets/img/svg/logo-3.svg'
import Logo4 from '../assets/img/svg/logo-4.svg'
import Logo5 from '../assets/img/svg/logo-5.svg'
import Logo6 from '../assets/img/svg/logo-6.svg'

const Background = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center md:px-16 md:py-12 py-10 sm:px-10">
        <div className="flex flex-col justify-center items-center mb-8 p-5">
          <h2 className="md:text-2xl text-xl font-bold mb-6 text-black">The Inspiration Behind Our Innovation</h2>
          <div className='flex flex-col md:flex-row justify-center items-center gap-x-3 gap-y-8 mb-8'>
            <div className="flex flex-col bg-white border-2 drop-shadow-xl rounded-xl p-4 md:p-0">
              <div className="md:h-80 h-50 overflow-y-auto p-4 md:p-5 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:bg-gray-300 ">
                <h3 className="text-md font-bold text-black ">
                  Addressing a Common Skin Health Concern
                </h3>
                <p className="mt-6 text-grey-500">
                  Acne is one of the most prevalent skin conditions, affecting millions worldwide. However, accessing reliable and effective treatments remains a challenge for many. Our app aims to bridge this gap by providing accurate and timely solutions to support better skin health.
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-white border-2 drop-shadow-xl rounded-xl p-4 md:p-0">
              <div className="md:h-80 h-50 overflow-y-auto p-4 md:p-5 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:bg-gray-300 ">
                <h3 className="text-md font-bold text-black ">
                  Addressing Psychological Impact
                </h3>
                <p className="mt-6 text-grey-500">
                  Acne doesn’t just affect the skin—it impacts mental well-being, self-esteem, and overall quality of life. By offering evidence-based recommendations and personalized care, we aim to help users feel more confident and supported in their skincare journey.
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-white border-2 drop-shadow-xl rounded-xl p-4 md:p-0">
              <div className="md:h-80 h-50 overflow-y-auto p-4 md:p-5 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:bg-gray-300 ">
                <h3 className="text-md font-bold text-black ">
                  Improve Dermatological Care With Technology
                </h3>
                <p className="mt-6 text-grey-500 ">
                  With advancements in artificial intelligence, mobile, and cloud computing, we can transform how dermatological care is delivered. Our app leverages these technologies to provide accessible, personalized, and science-backed solutions to improve skin health outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-6">
          <div className='flex flex-col lg:flex-row gap-y-2 gap-x-6 justify-center items-center lg:items-start mb-12'>
            <img src={Bangkit} alt="Bangkit.webp" className='w-72'/>
            <div className='flex flex-row lg:flex-col gap-2 lg:gap-0 lg:mt-1'>
              <p className="text-sm md:text-lg lg:text-xl font-bold text-black">2024 Batch 2</p>
              <p className='text-sm md:text-lg lg:text-xl text-black'>Product Track Capstone Project</p>
            </div>
          </div>

          <div className='flex flex-col bg-white justify-center items-center w-full p-6 md:py-6 md:px-10 gap-10'>
            <h2 className='md:text-2xl text-md font-bold text-black'>Trusted By Leading Skincare Brands</h2>
            <div className="grid gap-x-10 gap-y-8 grid-cols-3">
              <div>
                <img src={Logo1} alt="svg-1" />
              </div>
              <div>
                <img src={Logo2} alt="svg-2" />
              </div>
              <div>
                <img src={Logo3} alt="svg-3" />
              </div>
              <div>
                <img src={Logo4} alt="svg-4" />
              </div>
              <div>
                <img src={Logo5} alt="svg-5" />
              </div>
              <div>
                <img src={Logo6} alt="svg-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Background;