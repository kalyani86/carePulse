import { CustomUserParams } from "@/type";
import { users } from "../appwrite.config";
import { ID } from "node-appwrite";

export const createUser=async({name,email,phone}:CustomUserParams)=>
{
    
    try {
        const user=await users.create(ID.unique(),email.toString(),phone.toString(),undefined,name.toString()
        )

        
    } catch (error:any) {
        console.log(error);
    }
}