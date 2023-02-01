import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgGXZcjvvE_z8k59bqQpGEix1JOvFVS0A",
  authDomain: "today-shop-bd.firebaseapp.com",
  projectId: "today-shop-bd",
  storageBucket: "today-shop-bd.appspot.com",
  messagingSenderId: "248371538679",
  appId: "1:248371538679:web:5592186d8693269f4f41f2",
};

const app = initializeApp(firebaseConfig);
export default app;
