export async function apiFetch<T>(
  url: string,
  body?: unknown,
  options: RequestInit = {},
  baseUrl?: string
): Promise<T> {
  baseUrl ??= process.env.NEXT_PUBLIC_SELF_URL!;
  const response = await fetch(`${baseUrl}${url}`, {
    body: JSON.stringify(body),
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    let errorMessage = await response.text();
    try {
      const errorData = JSON.parse(errorMessage);
      if (errorData["error"]) errorMessage = errorData["error"];
    } catch {}
    throw new Error(errorMessage || "Network error");
  }
  return await response.json();
}
