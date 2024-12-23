
export const fetchImageFromPixabay = async (name) => {
    const apiKey = 'ENTER_YOUR_API_KEY';
    const searchQuery = encodeURIComponent(name); 
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&per_page=3`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.hits && data.hits.length > 0) {
        return data.hits[0].webformatURL; 
      }
      return null; 
    } catch (error) {
      console.error("Error fetching image from Pixabay:", error);
      return null; 
    }
  };
  
