import { API_KEY, API_URL } from './settings'

const getGifs = async (keyword = 'morty') => {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  const response = await fetch(apiUrl)
  const { data } = await response.json()
  return data.map(({ images, title, id }) => {
    const { url } = images.downsized_medium
    return {
      id,
      title,
      url
    }
  })
}

export default getGifs
