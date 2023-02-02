import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDIvzazXTaXvxuI8-k6UgrlwEjbG9vf5gE",
    authDomain: "restaurantapp-b0f9d.firebaseapp.com",
    databaseURL: "https://restaurantapp-b0f9d-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-b0f9d",
    storageBucket: "restaurantapp-b0f9d.appspot.com",
    messagingSenderId: "777148881257",
    appId: "1:777148881257:web:cf23381dd88d801b23c5f8"
  };

  const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};