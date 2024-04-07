import { requestGetCocktails } from '@api/cocktails'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { DrinksType } from '../../types/DrinksType'

export const fetchCocktails = createAsyncThunk<
  DrinksType,
  string,
  { rejectValue: string }
>('cocktails/fetchCocktails', async (name: string, thunkAPI) => {
  try {
    return await requestGetCocktails(name)
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to retrieve data')
  }
})
