import React from 'react'
import SocialLinks from '../components/SocialLinks'
import Skills from '../components/Skills'
import Section from '../components/Section'
import Experience from '../components/Experience'

export const Home = () => {
  return (
    <main className='grid grid-cols-1 max-w-screen-xl mx-auto px-2 sm:px-4 py-8 sm:py-8 gap-y-12 gap-x-6'>
      <SocialLinks />
      <Section title='Skills'>
        <Skills />
      </Section>
      <Section title='Experience'>
        <Experience />
      </Section>
    </main>
  )
}
