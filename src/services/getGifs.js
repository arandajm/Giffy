const apiKey = 'rVKdKwKewK7z4ZEeLKLWG0XmDgw7fP1g'
const getGifs = (keyword = 'morty') => {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  return fetch(apiUrl)
    .then(res => res.json())
    .then(({ data }) => {
      return data.map(({ images, title, id }) => {
        const { url } = images.downsized_medium
        return {
          id,
          title,
          url
        }
      })
    })
}

export default getGifs
