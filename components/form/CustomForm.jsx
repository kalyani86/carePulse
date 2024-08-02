"use client";

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


export const CustomForm = ({control,name}) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{name}</FormLabel>
        <FormControl>
          <Input placeholder={`${name} here `} {...field} />
        </FormControl>
        <FormDescription>
          
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
  )
}
