import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6eJVamjqTVEchEzRKiJ-owsgUtAkcTWs",
  authDomain: "devchat-8559b.firebaseapp.com",
  projectId: "devchat-8559b",
  storageBucket: "devchat-8559b.appspot.com",
  messagingSenderId: "57326968408",
  appId: "1:57326968408:web:30b9deded3cdcb564df42d",
  measurementId: "G-RJCPL4ZQN1",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
