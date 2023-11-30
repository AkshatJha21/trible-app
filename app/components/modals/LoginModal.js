'use client';

import axios from "axios";
import { useCallback, useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import Modal from "./Modal";
import FormHeader from "../forms/FormHeader"
import Input from "../forms/Input"
import ButtonOutline from "../buttons/ButtonOutline";


const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          email: "",
          password: "",
        },
    });

    const onSubmit = (data) => {
        setIsLoading(true);
    
        axios.post("/api/register", data)
          .then(() => {
            // toast.success("Registered!");
            loginModal.onClose();
            // loginModal.onOpen();
          })
          .catch((error) => {
            // toast.error(error);
            console.log(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
    };

    const onToggle = useCallback(() => {
      loginModal.onClose();
      registerModal.onOpen();
    }, [loginModal, registerModal]);

    const bodyContent = (
      <div className="flex flex-col gap-4">
        <FormHeader title="Sign In" subtitle="Welcome back"/>
        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          errors={errors}
          required
        />
        <Input
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          errors={errors}
          required
        />
      </div>
    );

    const footerContent = (
      <div className="flex flex-col gap-4 mt-3">
        <hr />
        <ButtonOutline text="Continue with Google" className="w-full"/>
        <div className="text-white text-center mt-4 font-light">
          <div className="justify-center flex flex-row items-center">
            <div>
              Don't have an account?
            </div>
            <div onClick={onToggle} className="text-[#00E091] cursor-pointer hover:underline">
              Sign Up
            </div>
          </div>
        </div>
      </div>
    );


    
  return (
    <Modal 
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Sign In"
        actionLabel="Login"
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        secondaryActionLabel="Continue with Google"
        footer={footerContent}
    />
  )
}

export default LoginModal