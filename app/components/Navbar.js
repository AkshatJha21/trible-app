"use client"

import React from 'react'
import ButtonOutline from './buttons/ButtonOutline'
import ButtonFill from './buttons/ButtonFill'
import useRegisterModal from '../hooks/useRegisterModal'
import useLoginModal from '../hooks/useLoginModal'

const Navbar = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
  return (
    <>
        <div className="flex justify-between items-center">
          {/* Title */}
          <h2 className="text-[#00E091] font-[525] text-2xl leading-[normal] not-italic tracking-wide text-center">
            Trible
          </h2>
          {/* User Auth btns -> Signup signin for sm-screen and above */}
          <div className="sm:flex hidden items-center ">
            <ButtonOutline text={"Sign In"} onClick={loginModal.onOpen}/>
            <ButtonFill text={"Sign Up"} onClick={registerModal.onOpen}/>
          </div>
          {/* User Auth div ends here */}
        </div>
    </>
  )
}

export default Navbar