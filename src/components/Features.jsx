import React from 'react'
import Video from '../assets/video/video-example.mp4'

//need to be revised
const Features = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center md:px-16 md:py-8 sm:px-10 py-12">
                <div className="flex flex-col justify-center items-center mb-8 p-5">
                    <h2 className="md:text-2xl text-xl font-bold mb-6 text-black">Explore Our Features</h2>
                    <video
                        className="w-full h-auto border border-opacity-15 border-black rounded-md"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="flex flex-col px-8">
                    <h2 className="md:text-2xl text-xl font-bold mb-8 text-black">Unlock Your Skin Potential With Us</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-y-9 gap-y-7 gap-x-8">
                        <li className="flex items-center">
                            <i className="fa-solid fa-bullseye text-2xl text-black mr-2 p-2 "></i>
                            <span className='text-black'>Accurate Skin Analysis</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fa-solid fa-chart-line text-2xl text-black mr-2 p-2 "></i>
                            <span className='text-black'>Track Your Own Progress</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fa-solid fa-calendar text-2xl text-black mr-2 p-2 "></i>
                            <span className='text-black'>Schedule Your Daily Skincare Routines</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fa-solid fa-cart-shopping text-2xl text-black mr-2 p-2 "></i>
                            <span className='text-black'>Built-in Marketplace</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fa-solid fa-mortar-pestle text-2xl text-black mr-2 p-2 "></i>
                            <span className='text-black'>Ingredient Insights</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fa-solid fa-star text-2xl text-black mr-2 p-2 "></i>
                            <span className='text-black'>Personal Skincare Recommendations</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fa-solid fa-user-doctor text-2xl text-black mr-2 p-2"></i>
                            <span className='text-black'>Consultation with Dermatologist</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fa-solid fa-mobile text-2xl text-black mr-2 py-2 px-3"></i>
                            <span className='text-black'>Clean and Responsive Design</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Features;