import { injectable } from "impact-app";
import { Supabase } from "./Supabase";

import { signal } from "signalit";

export type AuthenticatorState =
  | {
      status: "AUTHENTICATING";
    }
  | {
      status: "AUTHENTICATED";
      user: null;
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
  constructor(private _supabase: Supabase) {}

  async signIn() {}
}
