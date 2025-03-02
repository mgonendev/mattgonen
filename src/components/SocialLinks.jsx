import React from 'react'

export default function SocialLinks() {
  return (
    <section className='flex flex-row w-full max-w-screen-xl mx-auto rounded-lg shadow-xl shadow-gray-600 bg-stone-200 text-gray-800 border-black'>
      <img
        alt='img'
        src='mattgonen_800x800.jpeg'
        className='object-cover object-center max-w-[240px] h-52 dark:bg-gray-500 rounded-l-lg '
      />
      <div className='flex flex-col justify-between px-1 sm:px-6 py-4 gap-y-2'>
        <p className='text-3xl font-semibold '>Matt Gonen</p>
        <p>
          Web : <a href='https://mattgonen.com'>https://mattgonen.com</a>
        </p>
        <a
          href='https://www.salesforce.com/trailblazer/mgonendev'
          target='_blank'
          rel='noopener noreferrer'
        >
          Salesforce profile
        </a>
        <a
          href='https://github.com/mgonendev'
          target='_blank'
          rel='noopener noreferrer'
        >
          github
        </a>
        <a
          href='https://www.linkedin.com/in/mgonendev/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Linkedin
        </a>
      </div>
    </section>
  )
}
