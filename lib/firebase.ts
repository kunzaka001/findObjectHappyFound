import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "dotenv/config";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_ID,
    storageBucket: process.env.NEXT_PUBLIC_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING,
    appId: process.env.NEXT_PUBLIC_APP,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };