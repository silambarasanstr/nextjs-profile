import React from 'react'

const ContactPages = () => {

    const config = {
        email : 'hellosimbu2023@gmail.com',
        phone: '+91 9360277878'
    }


  return (
    <div>
       <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-2 text-[20px]'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2 text-[20px]'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2 text-[20px]'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
    </section>
    </div>
  )
}

export default ContactPages
