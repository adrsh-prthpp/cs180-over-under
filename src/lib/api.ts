export async function apiFetch(url: string, options: RequestInit = {}) {
    const token = localStorage.getItem("token");
  
    const headers = {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}), // Attach token if available
    };
  
    const res = await fetch(url, { ...options, headers });
  
    if (!res.ok) {
      throw new Error(`API request failed: ${res.statusText}`);
    }
  
    return res.json();
  }
  