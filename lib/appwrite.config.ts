import * as sdk from "node-appwrite";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const {
  NEXT_PUBLIC_PROJECT_ID: PROJECT_ID,
  NEXT_PUBLIC_API_KEY: API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

// console.log(ENDPOINT, PROJECT_ID, API_KEY);

const client = new sdk.Client();

// client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66b0ab1d00155084d842")
  .setKey(
    "fc82f14e143c9393cec46d01b04c23222212baf2e977c0162f1f2ebaa7ebad19629d919c9dba9b0bd68f9c27f5cc8baeb3704918c031718d283016798f0cb7db3bc752ba83fa147b1b9e180d1275621812182bdf42bf2442f653ebcbc00f16eaef060c4ba7b8e29c5baa15cd8237652f7e352c6d5198706990e2115987907d0e"
  );

export const databases = new sdk.Databases(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
export const users = new sdk.Users(client);
