const BASE_URL = "http://localhost:8000";

export async function uploadResult(file) {
  const formData = new FormData();

  formData.append("result", file);

  const response = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  return response.json();
}