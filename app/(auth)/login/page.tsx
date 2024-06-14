import LoginForm from '@/components/Form-builder/LoginForm'
import LoginHeader from '@/components/shared/LoginHeader'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Login({}: Props) {
  return (
    <div>
      <LoginHeader />
      <div className=' w-2/5 mx-auto'>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
