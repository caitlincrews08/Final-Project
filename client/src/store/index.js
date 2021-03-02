import { useReducer, createContext } from 'react';
import rootReducer from './reducers';
import { initialState } from './reducers/authReducers';

export const Store = createContext(initialState);

export function StoreProvider(props) {
  const [ state, dispatch ] = useReducer(rootReducer[0], rootReducer[1]);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
