// eslint-disable-next-line no-unused-vars
import React from 'react'
import HeroBlog from '../components/HeroBlog'
import Articles from '../components/Articles'

export default function Blog() {
  return (
    <>
        <main className='flex-grow pt-20'>
          <div className='min-h-screen bg-[#0a0a0a]'>
            <HeroBlog/>
            <Articles/>
          </div>
        </main>
    </>
  )
}
