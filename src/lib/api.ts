const API_BASE_URL = "http://localhost:8000/api/v1";

export async function loginUser(email: string, pass: string) {
  
  const formData = new URLSearchParams();
  formData.append('grant_type', 'password');
  formData.append('username', email); // FastAPI OAuth2 espera 'username'
  formData.append('password', pass);

  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/x-www-form-urlencoded",
      "accept": "application/json"
    },
    body: formData.toString(),
  });

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = Array.isArray(errorData.detail) 
      ? errorData.detail[0].msg 
      : errorData.detail;
    throw new Error(errorMessage || "Failed to login");
  }

  return response.json();
}