import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsrE8--PKmR3kPcdSUdXeNBbrnrgEqqbI",
  authDomain: "e-tuitionbd-fa22c.firebaseapp.com",
  projectId: "e-tuitionbd-fa22c",
  storageBucket: "e-tuitionbd-fa22c.firebasestorage.app",
  messagingSenderId: "573707508482",
  appId: "1:573707508482:web:3af824ecc74827a3cbc01b"
};

const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app)