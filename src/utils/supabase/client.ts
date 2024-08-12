import { createBrowserClient } from "@supabase/ssr";
import { envs } from "../../../envs";

export const createClient = () =>
  createBrowserClient(
    envs.SUPABASE_URL,
    envs.SUPABASE_KEY,
  );