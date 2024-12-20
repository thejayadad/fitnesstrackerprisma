import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderLogo = () => {
  return (
    <Link href='/'>
        <div className='items-center hidden md:flex'>
            <Image
                src='/logo.png'
                height={28}
                width={28}
                alt='Logo'
            />
            <p className='font-semibold text-gray-900 text-2xl ml-2.5'>
                Fuel&Burn
            </p> 
        </div>
    </Link>
  )
}

export default HeaderLogo