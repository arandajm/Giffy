import { API_KEY, API_URL } from './settings'

const getGifs = (keyword = 'morty') => {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
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
