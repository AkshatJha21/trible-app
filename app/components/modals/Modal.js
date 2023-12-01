"use client";

import React, { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import ButtonFill from '../buttons/ButtonFill';
import ButtonOutline from '../buttons/ButtonOutline';


const ModalProps = {
    isOpen: false,
    onClose: () => {},
    onSubmit: () => {},
    title: '',
    body: null,
    actionLabel: '',
    footer: null,
    disabled: false,
    secondaryAction: null,
    secondaryActionLabel: '',
  };

const Modal = (props) => {
    const modalProps = { ...ModalProps, ...props };
    const {
        isOpen,
        onClose,
        onSubmit,
        title,
        body,
        actionLabel,
        footer,
        disabled,
        secondaryAction,
        secondaryActionLabel,
      } = modalProps;

      const [showModal, setShowModal] = useState(isOpen);

      useEffect(() => {
        setShowModal(isOpen);
      }, [isOpen]);

      const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
      }, [disabled, onClose]);

      const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
      }, [disabled, onSubmit]);

      const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }

        secondaryAction();
      }, [disabled, secondaryAction]);

      if(!isOpen) {
        return null;
      }

  return (
    <>
        <div className='m-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/60'>
            <div className='relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto'>
                {/* Content */}
                <div className={`translate duration-300 h-full ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <div className='translate h-full lg:h-auto md:h-auto border-0 rounded-md shadow-lg relative flex flex-col w-full bg-[#1C2529] outline-none focus:outline-none'>
                        {/* Header */}
                        <div className='flex p-2 items-center justify-center rounded-t relative'>
                            <button onClick={handleClose} className='p-1 border-0 hover:opacity-70 transition absolute right-9 text-white'>
                                <IoMdClose size={18} />
                            </button>
                            {/* <div className='text-lg font-normal text-[#00E091]'>
                                {title}
                            </div> */}
                        </div>
                        {/* Body */}
                        <div className='relative p-6 flex-auto text-white'>
                            {body}
                        </div>
                        {/* Footer */}
                        <div className='flex flex-col gap-2'>
                            <div className=''>
                                {/* Buttons */}
                                <ButtonFill text={actionLabel} onClick={handleSubmit} className="w-full"/>
                                {/* <ButtonOutline text={secondaryActionLabel} onClick={handleSecondaryAction} className="w-full"/> */}
                            </div>
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal