const key = '55633359-e6facadba1b7542d91fe672ce';
export function getImagesByQuery(query) {
  return fetch(
    `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.log('Помилка запиту:', error);
      throw error;
    });
}
