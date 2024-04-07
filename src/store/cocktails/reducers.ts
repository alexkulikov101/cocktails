import { createSlice } from '@reduxjs/toolkit'

import { DrinksType } from '../../types/DrinksType'
import { fetchCocktails } from './actions'

export interface ICocktails {
  error: string
  isFetching: boolean
  data: DrinksType | null
}

const initialState: ICocktails = {
  error: '',
  isFetching: false,
  data: null,
}

export const CocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCocktails.pending, (state) => {
      state.isFetching = true
    })

    builder.addCase(fetchCocktails.fulfilled, (state, action) => {
      state.isFetching = false
      state.data = action.payload
    })

    builder.addCase(fetchCocktails.rejected, (state, action) => {
      state.isFetching = false
      if (action.payload) {
        state.error = action.payload
      }
    })
  },
})

// eslint-disable-next-line no-empty-pattern
export const {} = CocktailsSlice.actions
