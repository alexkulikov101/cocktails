import { FC } from 'react'

import { CocktailType } from '../../../../types/CocktailType.ts'
import './style.scss'

interface Props {
  drink: CocktailType
}

export const CocktailInfo: FC<Props> = ({ drink }) => {
  return (
    <div className="cocktail-info">
      <div>
        <h2>{drink.strDrink}</h2>
        <p>{drink.strCategory}</p>
        <p>{drink.strAlcoholic}</p>
        <p className="m-1">{drink.strGlass}</p>
        <div>
          <h3>Instructions:</h3>
          <p>{drink.strInstructions}</p>
        </div>
      </div>
      <img
        loading="lazy"
        className="cocktail-info-image"
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
      />
    </div>
  )
}
