import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='sticky top-0 z-30 m-0 bg-sky-900'>
      <nav className='relative flex items-center justify-between px-1 lg:px-8 py-2 mx-auto max-w-full lg:max-w-screen-xl'>
        <Link
          to='/'
          aria-label='Brand'
          title='Brand'
          className='inline-flex items-center'
        >
          <div className='flex px-1 py-0 items-center bg-gradient-to-r from-cyan-300 to-cyan-100 rounded-md '>
            <span className='mx-2 text-base sm:text-xl md:text-3xl font-extrabold text-amber-800 hover:text-amber-900'>
              Matt Gonen
            </span>
          </div>
        </Link>
      </nav>
    </header>
  )
}
