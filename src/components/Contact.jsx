import React from 'react'

const Contact = () => {
  return (
    <div className="md:px-12">
      <div className="flex flex-col md:flex-row md:px-12 px-8 py-8 gap-6">
        <div className='flex flex-col bg-white border-4 shadow-xl p-4 w-full'>
          <h2 className='text-2xl font-bold text-black'>CONTACTS</h2>
          <p className='font-semibold text-black mb-4'>Have Questions? Let's Chat!</p>
          <div>
            <p className='text-black text-lg font-bold'>E-Mail</p>
            <p className='text-grey-500'>foskin.services@gmail.com</p>
          </div>
          <div>
            <p className='text-black text-lg font-bold'>Phone</p>
            <p className='text-grey-500'>+62 21 1234 5678</p>
          </div>
          <div>
            <p className='text-black text-lg font-bold'>WhatsApp</p>
            <p className='text-grey-500'>+62 51 7227 8849</p>
          </div>
        </div>
        <div className='flex flex-col bg-white border-4 shadow-xl p-4 w-full'>
          <h2 className='text-2xl font-bold text-black'>SOCIAL MEDIA</h2>
          <p className='font-semibold text-black mb-6'>Join us for further updates!</p>
          <a href='https://www.instagram.com/foskin.id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target="_blank" rel="noopener noreferrer" className="flex items-center mb-6 ms-1" >
            <i className="fab fa-instagram text-2xl text-grey-500 mr-3"></i>
            <span className='text-black'>Foskin Instagram</span>
          </a>
          <a href='https://discord.gg/7FDENF2m' target="_blank" rel="noopener noreferrer" className="flex items-center mb-6" >
            <i className="fab fa-discord text-2xl text-grey-500 mr-2"></i>
            <span className='text-black'>Foskin Discord</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;