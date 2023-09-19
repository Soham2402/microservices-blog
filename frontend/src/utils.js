
// get posts
export const getPosts =  async (link) => {
    try {
      const response = await fetch(link);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json(); // Parse JSON
      return data
      
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

