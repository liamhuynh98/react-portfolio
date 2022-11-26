import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {
    pageInfo: PageInfo;
}

function ContactMe ({pageInfo}: Props){

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href=`mailto:liamhuynh21@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl uppercase font-semibold text-center'>
                 I'd love to hear from {" "}
                 <span className='decoration-[#38bdf8] underline'>You</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>{pageInfo?.phoneNumber}</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>{pageInfo?.email}</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>{pageInfo?.address}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}  className='flex flex-col space-y-2 w-fit mx-auto'>

                <div className='flex space-x-2 '>
                     <input {...register('name')} placeholder='Name' className='contactInput' type='text'></input>
                     <input {...register('email')} placeholder='Email' className='contactInput' type='email'></input>
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type='text'></input>

                <textarea {...register('message')} placeholder='Message' className='contactInput'></textarea>

                <button type='submit' className='transition ease-in-out hover:scale-105 delay-150 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:-translate-y-1 hover:to-yellow-500 py-5 px-10 rounded-md text-black font-bold'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe 