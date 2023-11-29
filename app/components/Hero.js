'use client'

import React from 'react'
import ButtonOutline from '../components/buttons/ButtonOutline'
import ButtonFill from '../components/buttons/ButtonFill'
import useLoginModal from '../hooks/useLoginModal'
import useRegisterModal from '../hooks/useRegisterModal'

const Hero = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  return (
    <div className="flex-1">
          <section className="text-white body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-[525] leading-[normal]not-italic tracking-wide text-white">
                  Welcome.
                </h1>
                <p className="mb-8 leading-relaxed text-2xl">
                  Join a community where your work matters.
                </p>
                {/* Get started Button starts*/}
                <div>
                  <ButtonFill onClick={loginModal.onOpen} className={"hidden sm:block"} text={"Get Started"}/>
                </div>
                {/* Get started Button ends here */}
                {/* Signin and signup for below sm */}
                <div className="sm:hidden flex items-center ">
                <ButtonOutline text={"Sign In"} onClick={loginModal.onOpen}/>
                <ButtonFill text={"Sign Up"} onClick={registerModal.onOpen}/>
                </div>
                {/* Signin and signup for below sm Buttons end here */}
              </div>
            </div>
          </section>
        </div>
  )
}

export default Hero