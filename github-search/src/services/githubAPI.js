const BASE_URL = 'https://api.github.com/search/';

export async function searchGitHub(query, type = 'repositories', page = 1) {
  const url = `${BASE_URL}${type}?q=${query}&page=${page}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    throw error;
  }
}
