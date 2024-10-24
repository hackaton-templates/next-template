import { cookies } from "next/headers";

export async function createSession<T>(data: T) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const encryptedData = await encrypt(data);
  cookies().set("session", encryptedData, {
    expires: expiresAt,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}

async function encrypt<T>(data: T) {
  return JSON.stringify(data);
}

async function decrypt<T>(data: string) {
  return JSON.parse(data) as T;
}
