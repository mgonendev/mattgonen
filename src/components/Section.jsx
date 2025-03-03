import React from 'react'

export default function Section({ title, children }) {
  return (
    <section className='w-full max-w-screen-xl p-1 sm:p-3 rounded-md mx-auto shadow-xl shadow-gray-600 bg-stone-200 text-gray-800 border-black'>
      <header className='text-3xl text-red-900 font-semibold'>{title}</header>
      {children}
    </section>
  )
}
