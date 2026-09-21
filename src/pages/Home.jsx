// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from '../components/Hero'
import Distinct from '../components/Distinct'
import Categories from '../components/Categories'
import Latest from '../components/Latest'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
        <main className='grow pt-20'>{/* bg-slate-50 */}
            
            <Hero/>
            <Distinct/>
            <Categories/>
            <Latest/>
            <Contact/>
        </main>
    </>
  )
}
