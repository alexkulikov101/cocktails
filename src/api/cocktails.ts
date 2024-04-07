import { api } from '.'

export const requestGetCocktails = async (name: string): Promise<any> => {
  const response = await api.get(`/api/json/v1/1/search.php?s=${name}`)

  return response.data
}
