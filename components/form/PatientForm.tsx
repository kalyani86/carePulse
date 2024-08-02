"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {CustomForm} from "@/components/form/CustomForm"
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
const formSchema = z.object({
  fullName: z.string().min(2).max(50),

})




export const PatientForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          fullName: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
  return (
    <Form {...form} >
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <section>
               <h1 className='text-2xl'>Hi there 👋</h1>
                 <p>Get Started with Appointment.</p>
        </section>
     
      <Button type="submit" className="bg-green-400 w-full">Submit</Button>
    </form>
  </Form>
  )
}














// import React from 'react'
// import { Input } from '../ui/input'
// import { Label } from "@/components/ui/label"
// import { Button } from '../ui/button'

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
//             <Input placeholder='kalyani patil' className='bg-slate-200 text-b'/>
//             </div>
//             <div className='mt-5'>
//             <Label htmlFor="email">Email Address</Label>
//             <Input placeholder='xyz@gmail.com' className='bg-slate-200'/>
//             </div>
//             <div className='mt-5'>
//             <Label htmlFor="phone no">Phone number</Label>
//             <Input placeholder='+91' className='bg-slate-200'/>
//             </div>
//             <div className='mx-auto items-center mt-5'>
//             <Button className='bg-green-400 w-full text-xl'>Get started</Button>
//             </div>
//         </div>
//     </div>
//   )
// }


