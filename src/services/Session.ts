import { inject, injectable } from "impact-app";
import { Signal, signal } from "signalit";
import { Supabase } from "./Supabase";

@injectable()
export class Session {
  private _user: Signal<null>;
  get user() {
    return this._user.value;
  }
  constructor(@inject("USER") user: null, private _supabase: Supabase) {
    this._user = signal(user);
  }
  signOut() {}
}
