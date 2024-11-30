import React from 'react'
import HeaderLogo from './header-logo'
import Navigation from './navigation'
import MobileMenu from './mobile-menu'

const Header = () => {
  return (
    <header
    className='px-4 py-8 lg:px-14 pb-36 bg-gradient-to-b from-secondary to-secondary-light bg-secondary text-gray-200'
    >
        <nav className='max-w-screen-lg mx-auto'>
            <div className='w-full flex items-center justify-between mb-14'>
                <div className='flex items-center lg:gap-x-12'>
                    <HeaderLogo />
                    <Navigation />
                    <div className='block lg:hidden'>
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header