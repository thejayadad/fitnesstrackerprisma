'use client'
import {useFormStatus} from "react-dom"

const GoogleButton = () => {
    const {pending} = useFormStatus()
  return (
    <>
        {pending ? (
            <button disabled className="flex items-center justify-center w-full space-x-1">
                <span className="loading loading-dots loading-md"></span>
                One Moment...
            </button>
        ) :
        (
            <button className="btn  w-full">SignIn With Google</button>
        )
    
    }
    </>
  )
}

export default GoogleButton