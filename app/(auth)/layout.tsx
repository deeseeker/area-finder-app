import React, { ReactNode } from 'react'

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className='my-4'>
      <div className='container py-[11px]'>{children}</div>
    </div>
  )
}

export default AuthLayout
