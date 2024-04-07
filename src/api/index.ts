import axios from 'axios'

export const baseURL = 'https://www.thecocktaildb.com'

export const api = axios.create({
  baseURL,
  withCredentials: true,
})
