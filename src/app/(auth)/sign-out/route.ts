import { logout } from "@/api/auth";
import { deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function GET() {
  try {
    await logout();
  } catch {
    // Ignore errors during server logout
  }
  await deleteSession();
  redirect("/sign-in");
}
