import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { CocktailInfo } from '@pages/cocktail/components/CocktailInfo'
import { RecipeIngredients } from '@pages/cocktail/components/RecipeIngredients'
import { fetchCocktails } from '@store/cocktails/actions'
import {
  DataCocktailsSelector,
  FetchingCocktailsSelector,
} from '@store/cocktails/selectors'
import { useAppDispatch, useAppSelector } from '@store/hooks'

export const CocktailPage = () => {
  const location = useLocation()
  const cocktailName = location.pathname.replace('/', '')

  const dispatch = useAppDispatch()
  const isFetching = useAppSelector(FetchingCocktailsSelector)
  const data = useAppSelector(DataCocktailsSelector)

  useEffect(() => {
    if (cocktailName) {
      dispatch(fetchCocktails(cocktailName))
    }
  }, [cocktailName])

  if (isFetching) return 'Loading...'

  if (!data || !data.drinks || (data.drinks && data.drinks.length === 0))
    return 'No cocktails found'

  return (
    <>
      {data.drinks.map((drink) => (
        <div className="width-full" key={drink.idDrink}>
          <CocktailInfo drink={drink} />
          <RecipeIngredients drink={drink} />
        </div>
      ))}
    </>
  )
}
