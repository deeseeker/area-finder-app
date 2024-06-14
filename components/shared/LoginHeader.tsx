import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function LoginHeader({}: Props) {
  return (
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
  )
}

export default LoginHeader
