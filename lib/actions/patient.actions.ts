import { ID, Query } from "node-appwrite";
import {
  BUCKET_ID,
  database,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  storage,
  users,
} from "@/lib/appwrite.config";
import { parseStringify } from "@/lib/utils";
// import { InputFile } from "node-appwrite/file";

let InputFile: any;
if (typeof window === "undefined") {
  // Dynamically import the 'InputFile' class only on the server side
  InputFile = require("node-appwrite/file").InputFile;
}

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    console.log("New user created", newUser);
    return parseStringify(newUser);
  } catch (error: any) {
    if (error && error?.code === 409) {
      const documents = await users.list([Query.equal("email", [user.email])]);
      return documents?.users[0];
    }
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);
    return parseStringify(user);
  } catch (error) {
    console.log(error);
  }
};

export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    let file;
    if (identificationDocument) {
      const inputFile = InputFile.fromBuffer(
        identificationDocument?.get("blobFile") as Blob,
        identificationDocument?.get("fileName") as string
      );
      file = await storage.createFile(
        "66b0b3fe0001cdc1616f",
        ID.unique(),
        inputFile
      );
    }

    const newPatient = await database.createDocument(
      "66b0ad370037a2156f46",
      "66b0ad51001030e126ed",
      ID.unique(),
      {
        identificationDocumentId: file?.$id || null,
        identificationDocumentUrl: `https://cloud.appwrite.io/v1/storage/buckets/66b0b3fe0001cdc1616f/files/${file?.$id}/view?project=66b0ab1d00155084d842`,
        ...patient,
      }
    );
    return parseStringify(newPatient);
  } catch (error) {
    console.log(error);
  }
};
