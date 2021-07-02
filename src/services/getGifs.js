import { API_KEY, API_URL } from './settings'

const getGifs = async (keyword = 'morty', page = 0, limit = 25) => {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=en`
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
