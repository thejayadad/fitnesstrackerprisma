import Header from '@/components/header/header';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
      <Header />
       <main className='px-3 lg:px-14'>
        {children}
    </main>
    </>
  )
}

export default layout

