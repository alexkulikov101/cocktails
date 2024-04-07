import { FC } from 'react'

import { CocktailType } from '../../../../types/CocktailType'

interface Props {
  drink: CocktailType
}

export const RecipeIngredients: FC<Props> = ({ drink }) => {
  const ingredientsData = Object.keys(drink).reduce(
    (acc: { ingredient: string; measure?: string }[], key) => {
      if (key.startsWith('strIngredient') && drink[key]) {
        const index = key.slice(-1)
        const ingredient = drink[`strIngredient${index}`]
        const measure = drink[`strMeasure${index}`] || ''

        if (ingredient) {
          acc.push({ ingredient, measure })
        }
      }
      return acc
    },
    [],
  )

  return (
    <>
      <h3>List of ingredients:</h3>
      <ul>
        {ingredientsData.map((item) => (
          <li key={`${item.ingredient}-${item.measure}`}>
            {item.measure && <span>{item.measure}</span>}{' '}
            <span>{item.ingredient}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
