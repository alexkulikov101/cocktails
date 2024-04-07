import * as asyncActions from './actions'
import * as selectors from './selectors'
import { CocktailsSlice } from './reducers'
import { composeActions } from '../utils'

export default {
  actions: composeActions(asyncActions, CocktailsSlice.actions),
  selectors,
}
