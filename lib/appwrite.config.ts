import * as  sdk from "node-appwrite";



const client=new sdk.Client();
client
.setEndpoint(process.env.ENDPOINT!)
.setProject(process.env.project_id!)
.setKey(process.env.API_KEY!)

console.log("endpoint:",client.config.endpoint)

export const databases=new sdk.Databases(client);
export const account=new sdk.Account(client);
export const storage=new sdk.Storage(client);
export const messaging=new sdk.Messaging(client);
export const users=new sdk.Users(client);


    

