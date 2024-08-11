"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {CustomForm} from "@/components/form/CustomFormField"
import {
  Form,
} from "@/components/ui/form"

import { useState } from "react"
import { createUser } from "@/lib/action/patient.action"
import { useRouter } from "next/navigation"
import { ID } from "node-appwrite"


const formSchema = z.object({
  name: z.string()
 .min(2,"name contain at least two character")
  .max(50,"name contain at most 50 character"),
  email:z.string().email("Invalid email address"),
  phone:z.string().refine((phone)=>/^\+?[1-9]\d{1,14}$/.test(phone),"Invalid phone number")
})

export enum formFieldType
{
    INPUT='input',
    CHEKBOX='chekbox',
    PHONE_INPUT='phoneInput',
    TEXTAREA='textarea',
    DATE_PICKER='datePicker',
    SELECT='select',
    SKELETON='skeleton'
}



export const PatientForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email:"",
          phone:""
        },
      })
     const router=useRouter();
     const [loader,setLoader]=useState(false);
     async function onSubmit({name,email,phone}: z.infer<typeof formSchema>) {
      setLoader(true);
      
      
       try {
        const userData={name,email,phone};

        const user=await createUser(userData);
       
        console.log(user);
        
       } catch (error) {
        console.log(error);
        
       }
      }
  return (
    <Form {...form} >
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <section>
               <h1 className='text-2xl'>Hi there 👋</h1>
                 <p>Get Started with Appointment.</p>
        </section>
     <CustomForm 
     fieldType={formFieldType.INPUT}
     control={form.control}
     name="name"
     label="Name"
     placeholder="John Doe"
     iconSrc="/assets/icons/user.svg"
     iconAlt="user"
     />

<CustomForm 
     fieldType={formFieldType.INPUT}
     control={form.control}
     name="email"
     label="Email"
     placeholder="John@gmail.com"
     iconSrc="/assets/icons/email.svg"
     iconAlt="email"
     />

<CustomForm 
     fieldType={formFieldType.PHONE_INPUT}
     control={form.control}
     name="phone"
     label="Phone number"
     />
      <Button type="submit" className="bg-green-400 w-full text-lg">Submit</Button>
    </form>
  </Form>
  )
}














// import React from 'react'
// import { Input } from '../ui/input'
// import { Label } from "@/components/ui/label"
// import { Button } from '../ui/button'
// import Image from 'next/image'

// export const PatientForm = () => {
//   return (
//     <div className=''>
//         <div className='flex-col'>
//             <h1 className='text-2xl'>Hi there....</h1>
//             <p>Get Started with Appointment.</p>
//         </div>

//         <div className='flex-col w-10/12 mt-10 '>
//             <div>
//             <Label htmlFor="fullname">Full name</Label>
//             <Image
//             src={"/assets/icons/user.svg"}
//             height={20}
//             width={20}
//             alt='user'
//             />
//             <Input placeholder='kalyani patil' className='bg-slate-200 text-black text-lg'/>
//             </div>
//             <div className='mt-5'>
//             <Label htmlFor="email">Email Address</Label>
//             <Input placeholder='xyz@gmail.com' className='bg-slate-200 text-black text-lg'/>
//             </div>
//             <div className='mt-5'>
//             <Label htmlFor="phone no">Phone number</Label>
//             <Input placeholder='+91' className='bg-slate-200 text-black text-lg'/>
//             </div>
//             <div className='mx-auto items-center mt-5'>
//             <Button className='bg-green-400 w-full text-xl'>Get started</Button>
//             </div>
//         </div>
//     </div>
//   )
// }


