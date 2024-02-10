import { Client, Account, Databases } from "appwrite";
// export const appWriteConfig = {
//   projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
//   endpoint: import.meta.env.VITE_APPWRITE_URL,
//   databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
// };
export const client = new Client();
export const account = new Account(client);
export const databases = new Databases(client, '65c60b0cd4b92a00f23f');
client.setEndpoint('https://cloud.appwrite.io/v1').setProject('65c6083373fc850768a0');
