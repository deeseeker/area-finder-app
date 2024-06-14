import LoginHeader from '@/components/shared/LoginHeader'
import Image from 'next/image'
import React from 'react'

type Props = {}

function Home({}: Props) {
  return (
    <div className='my-4'>
      <LoginHeader />
      <div className='flex justify-between border border-red-600 h-[85vh] mt-1 gap-8'>
        <div className='self-center'>
          <div className='border border-purple-600'>
            <div className='border border-green-600 w-[45%]'>
              <p className='text-[40px] font-bold leading-[48px]'>
                Find a place you will love to live!
              </p>
              <p>
                See through the lenses of people who have lived or visited the
                neighbourhood you might have in mind.
              </p>
            </div>

            <form>
              <div>
                <Image
                  width={16}
                  height={16}
                  src='/icons/search.svg'
                  alt='search icon'
                />
                <input
                  name='search'
                  autoComplete='off'
                  aria-label='Enter Address'
                  className='focus:ring-0 w-1/2 focus:outline-none focus:border-[#5378F6] pr-3 pl-10 rounded-lg py-4 px-3 bg-[#F3F7FE] text-[#101012] text-sm border border-[#d4dcf1]'
                  placeholder='Enter Address'
                />
              </div>
            </form>
            <button className='bg-[#3366FF] active:bg-[#061E66] hover:bg-[#2952CC] px-10 py-4 uppercase rounded-[6px] text-sm font-medium  text-[#FFFFFF] mt-2'>
              Search
            </button>
          </div>
        </div>
        <div className='border border-green-600 basis-[500px]'>
          Scrolling feed
        </div>
      </div>
    </div>
  )
}

export default Home
