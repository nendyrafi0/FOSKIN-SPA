import React from 'react'

//need to be revised
const Features = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Features</h2>
                    <img src="https://placehold.co/400x200" alt="Illustration of a smartphone with a play button indicating autoplay video or slideshow" className="rounded-lg shadow-lg" />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Unlock Your Skin's Potential With Us</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-gray-700 mr-2"></i>
                            <span>Accurate Skin Analysis</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-gray-700 mr-2"></i>
                            <span>Track Your Own Progress</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-gray-700 mr-2"></i>
                            <span>Schedule Your Daily Skincare Routines</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-gray-700 mr-2"></i>
                            <span>Consultation with Dermatologist</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-gray-700 mr-2"></i>
                            <span>Ingredient Insights</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-gray-700 mr-2"></i>
                            <span>Built-in Marketplace</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-gray-700 mr-2"></i>
                            <span>Your Personal Skincare Recommendations</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check-circle text-gray-700 mr-2"></i>
                            <span>Clean and Responsive Design</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Features;