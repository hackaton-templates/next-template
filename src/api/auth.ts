import { apiFetch } from "@/lib/fetch";
import { SignInData } from "@/lib/forms/sign-in";

export type AuthCredentials = SignInData;

export interface AuthResult {
  accessToken: string;
  refreshToken: string;
}

export async function auth(credentials: AuthCredentials) {
  return await apiFetch<AuthResult>("/api/login", credentials, {
    method: "POST",
  });
}
