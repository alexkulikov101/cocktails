import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../store'

export const Store = (state: RootState) => state

export const StoreSelector = createSelector(Store, (state) => state.cocktails)

export const DataCocktailsSelector = createSelector(
  StoreSelector,
  (state) => state.data,
)

export const FetchingCocktailsSelector = createSelector(
  StoreSelector,
  (state) => state.isFetching,
)

export const ErrorCocktailsSelector = createSelector(
  StoreSelector,
  (state) => state.error,
)
