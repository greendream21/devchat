import { injectable } from "impact-app";

import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Analytics, getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD6eJVamjqTVEchEzRKiJ-owsgUtAkcTWs",
  authDomain: "devchat-8559b.firebaseapp.com",
  projectId: "devchat-8559b",
  storageBucket: "devchat-8559b.appspot.com",
  messagingSenderId: "57326968408",
  appId: "1:57326968408:web:30b9deded3cdcb564df42d",
  measurementId: "G-RJCPL4ZQN1",
};

@injectable()
export class Firebase {
  private app: FirebaseApp;
  auth: Auth;
  analytics: Analytics;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.analytics = getAnalytics(this.app);
  }
}
