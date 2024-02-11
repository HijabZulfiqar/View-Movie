import { Client, Account, Databases } from "appwrite";
// export const appWriteConfig = {
//   projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
//   endpoint: import.meta.env.VITE_APPWRITE_URL,
//   databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
// };
export const client = new Client();
export const account = new Account(client);
export const databases = new Databases(
  client,
  `${import.meta.env.VITE_APPWRITE_DATABASE_ID}`
);
client
  .setEndpoint(`${import.meta.env.VITE_APPWRITE_PROJECT_URL}`)
  .setProject(`${import.meta.env.VITE_APPWRITE_PROJECT_ID}`);
