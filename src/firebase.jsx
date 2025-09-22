// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realtime-messenger-429909.firebaseapp.com",
  projectId: "realtime-messenger-429909",
  storageBucket: "realtime-messenger-429909.firebasestorage.app",
  messagingSenderId: "523453827098",
  appId: "1:523453827098:web:99e52656cfea47584fa9a3",
  measurementId: "G-8Q811JVH5C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);