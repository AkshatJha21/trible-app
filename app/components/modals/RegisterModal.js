'use client';

import axios from "axios";
import { useCallback, useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "../../hooks/useRegisterModal";
import useLoginModal from "../../hooks/useLoginModal";
import Modal from "./Modal";
import FormHeader from "../forms/FormHeader"
import Input from "../forms/Input"
import ButtonOutline from "../buttons/ButtonOutline";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          name: "",
          email: "",
          password: "",
        },
    });

    const onSubmit = (data) => {
        setIsLoading(true);
    
        axios.post("/api/register", data)
          .then(() => {
            // toast.success("Registered!");
            registerModal.onClose();
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
      registerModal.onClose();
      loginModal.onOpen();
    }, [registerModal, loginModal]);

    const bodyContent = (
      <div className="flex flex-col gap-4">
        <FormHeader title="Sign Up" subtitle="Create a new account"/>
        <Input
          id="name"
          label="Name"
          disabled={isLoading}
          errors={errors}
          required
        />
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
              Already have an account?
            </div>
            <div onClick={onToggle} className="text-[#00E091] cursor-pointer hover:underline">
              Login
            </div>
          </div>
        </div>
      </div>
    );


    
  return (
    <Modal 
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Sign Up"
        actionLabel="Create Account"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        secondaryActionLabel="Continue with Google"
        footer={footerContent}
    />
  )
}

export default RegisterModal