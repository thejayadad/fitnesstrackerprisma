import { signIn } from '@/auth'
import React from 'react'
import GoogleButton from './google-button'

const AuthModal = () => {
  return (
    <>
        {/* The button to open modal */}
<a href="#my_modal_8" className="btn">Gain Access</a>

{/* Put this part before </body> tag */}
<div className="modal" role="dialog" id="my_modal_8">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Hey There!</h3>
    <p className="py-4">Your clicks away from gaining access!</p>
    <div className='flex flex-col w-full items-center justify-center space-y-6'>
        <form
        action={async () => {
            'use server'
            await signIn('google')
        }}
        className='w-full'
        >
            <div className="modal-action w-full">
            <GoogleButton />

            </div>
        </form>
    </div>
    
  </div>
</div>
    </>
  )
}

export default AuthModal