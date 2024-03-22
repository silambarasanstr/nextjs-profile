import React from 'react'
import Image from 'next/image';
import ResumeImg from '@/app/assets/resume.jpg';

const ResumePages = () => {

    const openPdf = () => {
        window.open('https://github.com/projects', '_blank');
      };

  return (
    <div>
         <section id='resume' className='flex flex-col md:flex-row px-5 py-32 bg-secondary '>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <Image className='w-[300px]' src={ResumeImg} alt="resume" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn cursor-pointer' onClick={openPdf}> Download</a></p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default ResumePages
