import { Models } from "node-appwrite";

export interface patient extends Models.Document
{
    userId:String,
    email:String,
    phone:String,
    name:String,
    privacyConsert:boolean,
    gender:String,
    birthdate:String,
    address:String,
    occupation:String,
    emergencyContact:String,
    issuranceProvider:String,
    issurancePolicyNo:String,
    alliergy:String,
    familyMedicalhistroy:String,
    pastMedicalHistroy:String,
    identificationNo:String,
    identificationtype:String,
    identificationDocumentId:String,
    identificationURL:String,
    currentMeditation:String,
    pastphysian:String,
    emergencyContactName:String
}

