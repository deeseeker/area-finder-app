'use client'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Values {
  firstName: string
  lastName: string
  email: string
  password: string
}

function LoginForm() {
  return (
    <div className='bg-[#FAFCFD] rounded-md w-[498px] px-6 py-[22px] flex flex-col items-center gap-4'>
      <h1 className='text-xl font-medium leading-6'>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 500)
        }}
      >
        <Form>
          <div className='grid grid-cols-1 gap-y-4'>
            <div className='flex gap-4'>
              <Field
                id='firstName'
                name='firstName'
                placeholder='First Name'
                className='w-[217px]'
              />
              <Field
                className='w-[217px]'
                id='lastName'
                name='lastName'
                placeholder='Last Name'
              />
            </div>
            <Field id='userName' name='userName' placeholder='Username' />
            <Field
              id='email'
              name='email'
              placeholder='E-mail address'
              type='email'
            />{' '}
            <Field id='password' name='password' placeholder='password' />{' '}
            <Field
              id='confirm-password'
              name='confirm-password'
              placeholder='confirm password'
            />{' '}
            <button
              type='submit'
              className='px-10 py-4 rounded-md bg-[#3366FF] uppercase text-white text-base font-medium leading-[19.36px]'
            >
              Sign Up
            </button>
          </div>
        </Form>
      </Formik>
      <div className='relative'>
        <div className='border border-[#3366FF59] w-[300px] '></div>
        <p className='bg-[#FAFCFD] absolute left-[140px] px-2 top-[-11px]'>
          Or
        </p>
      </div>

      <button className='alt-btn'>
        <Image src='/icons/google.svg' alt='google' width={24} height={24} />{' '}
        Sign Up with Google
      </button>
      <button className='alt-btn'>
        <Image
          src='/icons/facebook.svg'
          alt='facebook'
          width={24}
          height={24}
        />{' '}
        Sign Up with Facebook
      </button>
      <button className='alt-btn'>
        <Image src='/icons/apple.svg' alt='apple' width={24} height={24} />
        Sign Up with Apple
      </button>

      <p className='text-xs leading-[14.52px] font-normal'>
        Already have an account?{' '}
        <Link href='/' className='text-[#557FF2] font-semibold'>
          Log In
        </Link>
      </p>
    </div>
  )
}

export default LoginForm
