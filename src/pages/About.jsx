// eslint-disable-next-line no-unused-vars
import React from 'react'
import HeroAbout from '../components/HeroAbout'
import Principles from '../components/Principles'
import OurTeam from '../components/OurTeam'
import ContactAbout from '../components/ContactAbout'

export default function About() {
  return (
    <>
        <div className='bg-[#0a0a0a]'>
            <HeroAbout/>
            <Principles/>
            <OurTeam/>
            <ContactAbout/>
        </div>
    </>
  )
}
