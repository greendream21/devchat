import { injectable } from "impact-app";
import { Firebase } from "./Firebase";

import { signal } from "signalit";
import { GithubAuthProvider, User, signInWithPopup } from "firebase/auth";

export type AuthenticatorState =
  | {
      status: "AUTHENTICATING";
    }
  | {
      status: "AUTHENTICATED";
      user: User;
    }
  | {
      status: "SIGNING_IN";
    }
  | {
      status: "ERROR";
      error: string;
    }
  | {
      status: "UNAUTHENTICATED";
    };

@injectable()
export class Authenticator {
  private _state = signal<AuthenticatorState>({
    status: "AUTHENTICATING",
  });
  get state() {
    return this._state.value;
  }
  get status() {
    return this._state.value.status;
  }
  constructor(private _firebase: Firebase) {
    _firebase.auth.onAuthStateChanged(this.authenticate.bind(this));
  }
  private authenticate(maybeUser: User | null) {
    if (maybeUser) {
      this._state.value = {
        status: "AUTHENTICATED",
        user: maybeUser,
      };
    } else {
      this._state.value = {
        status: "UNAUTHENTICATED",
      };
    }
  }
  async signIn() {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(this._firebase.auth, provider);
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;

      this._state.value = {
        status: "AUTHENTICATED",
        user,
      };
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
      console.log(error);
    }
  }
}
