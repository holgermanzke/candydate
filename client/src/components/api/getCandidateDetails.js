export async function getCandidateDetails(candId) {
  const response = await fetch(`./api/candidates`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  return data;
}