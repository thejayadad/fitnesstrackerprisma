import React from 'react'
import HeaderLogo from './header-logo'
import Navigation from './navigation'
import MobileMenu from './mobile-menu'
import WelcomeMessage from './welcome-message'
import { auth } from '@/auth'

const Header = async () => {
    const session = await auth()
    const userEmail = session?.user?.email
    if(!userEmail){
        return null
    }
  return (
    <header
    className='px-4 py-8 lg:px-14 pb-24 lg:pb-36 bg-gradient-to-b from-slate-50 to-slate-300 bg-slate-600 text-gray-200'
    >
        <nav className='max-w-screen-lg mx-auto'>
            <div className='w-full flex items-center justify-between mb-14'>
                <div className='flex items-center lg:gap-x-12'>
                    <HeaderLogo />
                    <Navigation />
                    <div className='block md:hidden'>
                        <MobileMenu />
                    </div>
                </div>
                <div>UserInfo</div>
            </div>
            <div>
                <WelcomeMessage userEmail={userEmail} />
            </div>
        </nav>
    </header>
  )
}

export default Header