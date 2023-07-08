import { injectable } from "impact-app";

import { SupabaseClient, createClient } from "@supabase/supabase-js";

@injectable()
export class Supabase {
  private client: SupabaseClient;

  constructor() {
    if (!import.meta.env.VITE_SUPABASE_KEY) {
      throw new Error("SUPABASE KEY NOT FOUND");
    }

    this.client = createClient(
      "https://hxljtyrsnuzkuijljjqe.supabase.co",
      import.meta.env.VITE_SUPABASE_KEY
    );
  }
}
