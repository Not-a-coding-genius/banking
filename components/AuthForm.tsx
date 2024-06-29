'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Loader2 } from 'lucide-react';


import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

/*const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  address: z.string().min(5),
  state: z.string().min(2),
  PostalCode: z.string().min(6),
  dob: z.string().min(10),
})*/

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  address: z.string().min(5),
  state: z.string().min(2),
  PostalCode: z.string().min(6),
  dob: z.string().min(10),
});

// Define a simpler schema for "sign in"
const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});



const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

    // 1. Define your form.
    /*const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password:"",
        firstName: "",
        lastName: "",
        address: "",
        state: "",
        PostalCode: "",
        dob: "",
      },
    })*/

      const formSchema = type === 'sign-in' ? signInSchema : signUpSchema;
      type FormValues = z.infer<typeof signInSchema> | z.infer<typeof signUpSchema>;

      const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: type === 'sign-in'
          ? { email: '', password: '' }
          : {
              email: '',
              password: '',
              firstName: '',
              lastName: '',
              address: '',
              state: '',
              PostalCode: '',
              dob: '',
            },
      });



    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      setIsLoading(true);
      console.log(values)
    }



  return (
    <section className="auth-form">
      <header className='flex flex-col gap-5 md:gap-8'>
      <Link href="/" className="cursor-pointer flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizon logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
          </Link>
          <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
              {user
                ? 'Link Account'
                : type === 'sign-in'
                  ? 'Sign In'
                  : 'Sign Up'
              }
              </h1>
              <p className="text-16 font-normal text-gray-600">
                {user
                  ? 'Link your account to get started'
                  : 'Please enter your details'
                }
              </p>
          </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          {/*plaind*/}
        </div>
      ): (
        <>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {type === 'sign-up' && (
          <>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
              <div className = "form-item">
                <FormLabel className="form-label">

                </FormLabel>
                <div  className="flex w-full flex-col">
                  <FormControl>
                    <Input placeholder='Enter your first name'
                    className='input-class'
                    {...field}/>
                  </FormControl>
                  <FormMessage className="form-message mt-2"/>
                </div>
              </div>
              )}
            />
              <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
              <div className = "form-item">
                <FormLabel className="form-label">

                </FormLabel>
                <div  className="flex w-full flex-col">
                  <FormControl>
                    <Input placeholder='Enter your last name'
                    className='input-class'
                    {...field}/>
                  </FormControl>
                  <FormMessage className="form-message mt-2"/>
                </div>
              </div>
              )}
            />
              <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
              <div className = "form-item">
                <FormLabel className="form-label">

                </FormLabel>
                <div  className="flex w-full flex-col">
                  <FormControl>
                    <Input placeholder='Enter your address'
                    className='input-class'
                    {...field}/>
                  </FormControl>
                  <FormMessage className="form-message mt-2"/>
                </div>
              </div>
              )}
            />
              <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
              <div className = "form-item">
                <FormLabel className="form-label">

                </FormLabel>
                <div  className="flex w-full flex-col">
                  <FormControl>
                    <Input placeholder='ex: TamilNadu'
                    className='input-class'
                    {...field}/>
                  </FormControl>
                  <FormMessage className="form-message mt-2"/>
                </div>
              </div>
              )}
            />
            <FormField
              control={form.control}
              name="PostalCode"
              render={({ field }) => (
              <div className = "form-item">
                <FormLabel className="form-label">

                </FormLabel>
                <div  className="flex w-full flex-col">
                  <FormControl>
                    <Input placeholder='ex: 600001'
                    className='input-class'
                    type='number'
                    {...field}/>
                  </FormControl>
                  <FormMessage className="form-message mt-2"/>
                </div>
              </div>
              )}
            />
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
              <div className = "form-item">
                <FormLabel className="form-label">

                </FormLabel>
                <div  className="flex w-full flex-col">
                  <FormControl>
                    <Input placeholder='yyyy-mm-dd'
                    className='input-class'
                    type= 'date'
                    {...field}/>
                  </FormControl>
                  <FormMessage className="form-message mt-2"/>
                </div>
              </div>
              )}
            />

          </>
        )}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
          <div className = "form-item">
            <FormLabel className="form-label">

            </FormLabel>
            <div  className="flex w-full flex-col">
              <FormControl>
                <Input placeholder='Enter your email'
                className='input-class'
                {...field}/>
              </FormControl>
              <FormMessage className="form-message mt-2"/>
            </div>
          </div>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
          <div className = "form-item">
            <FormLabel className="form-label">

            </FormLabel>
            <div  className="flex w-full flex-col">
              <FormControl>
                <Input placeholder='Enter your password'
                className='input-class'
                type = 'password'
                {...field}/>
              </FormControl>
              <FormMessage className="form-message mt-2"/>
            </div>
          </div>
          )}
          />
              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === 'sign-in'
                    ? 'Sign In' : 'Sign Up'}
                </Button>
              </div>
      </form>
    </Form>
    <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === 'sign-in'
              ? "Don't have an account?"
              : "Already have an account?"}
            </p>
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
              {type === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm