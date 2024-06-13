import LoginForm from '@/components/Form-builder/LoginForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Login({}: Props) {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <Image
          src='/icons/business-icon.svg'
          alt='spotta ng'
          width={92}
          height={29}
        />
        <Link
          href='/'
          className='text-[#557FF2] text-sm font-semibold leading-4 uppercase'
        >
          Login
        </Link>
      </div>
      <div className=' w-2/5 mx-auto'>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
