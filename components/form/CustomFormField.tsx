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
import { Control } from "react-hook-form";
import { formFieldType } from "./PatientForm";
import { fields } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";
import Image from "next/image";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from "react";

interface CustomFormProp
{
  control:Control<any>,
  fieldType:formFieldType,
  name:string,
  label?:string,
  placeholder?:string,
  iconSrc?:string,
  iconAlt?:string,
  disable?:boolean,
  dateformat?:string,

}
const RenderField=({field,props}:{field:any,props:CustomFormProp})=>
{
  const {fieldType,name,placeholder,iconSrc,iconAlt}=props;
  const [change,setChange]=useState();
 // console.log(fieldType);
    switch (fieldType) {
      case formFieldType.INPUT:
        return(
          <div className="flex bg-dark-400 border rounded-md hover:">
            {iconSrc? <Image
            src={iconSrc}
            height={20}
            width={20}
            alt={iconAlt?iconAlt:""}
            className="ml-2"
            />:<></>
            }
            <FormControl>
                  <Input
                   {...field}
                name={name}
                placeholder={placeholder}
                className="border-0 shad-input text-md"
                autoComplete="true"
                />
            </FormControl>
        
          </div>
          
        )
        
       case formFieldType.PHONE_INPUT:
        return(
          <div className="flex bg-dark-400 border rounded-md hover:">
          {iconSrc? <Image
          src={iconSrc}
          height={20}
          width={20}
          alt={iconAlt?iconAlt:""}
          className="ml-2"
          />:<></>
          }
          <FormControl>
                <PhoneInput
                {...field}
                defaultCountry="US"
                withCountryCallingCode
                international
                value={field.value as 'E164number' | undefined}
                onChange={field.onChange}
                className="border-0 shad-input text-md ml-2"
              />
          </FormControl>
      
        </div>
        )
    
      default:
        break;
    }
  

}

export const CustomForm = (props:CustomFormProp) => {
  const {control,fieldType,name,label,placeholder,iconSrc}=props;

  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        {
          fieldType!==formFieldType.CHEKBOX && label &&
          <FormLabel>{label}</FormLabel>
        }
       
       <RenderField field={field} props={props}/> 
      <FormMessage/>
       
      </FormItem>
    )}
  />
  )
}
