import { apiFetch } from "@/lib/fetch";
import { SignInData } from "@/lib/forms/sign-in";

export type AuthCredentials = SignInData;

export interface AuthResult {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: string;
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  roles: string[];
}

export async function auth(credentials: AuthCredentials) {
  return await apiFetch<AuthResult>("/api/login", credentials, {
    method: "POST",
  });
}

export async function logout() {
  await apiFetch("/api/logout");
}

export async function me() {
  return await apiFetch<User>("/api/profile");
}
