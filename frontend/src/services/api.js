const BASE_URL = "https://eduinsight-ai-g31k.onrender.com";

export async function uploadResult(file) {
  const formData = new FormData();

  formData.append("result", file);

  const response = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  return response.json();
}