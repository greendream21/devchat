import { inject, injectable } from "impact-app";
import { Signal, signal } from "signalit";
import { Firebase } from "./Firebase";
import type { User } from "firebase/auth";

@injectable()
export class Session {
  private _user: Signal<User>;
  get user() {
    return this._user.value;
  }
  constructor(@inject("USER") user: User, private _firebase: Firebase) {
    this._user = signal(user);
  }
  signOut() {}
}
