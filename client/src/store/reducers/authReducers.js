import isEmpty from 'is-empty';
import { SET_CURRENT_USER, USER_LOADING, SET_LOAD_FOR_EDIT } from '../actions/types';
import placeholder from '../../assets/placeholder.png'

export const initialState = {
  isAuthenticated: false,
  user: {},
  pre_edit: placeholder,
  resetSuccess: false,
  loading: false,
};

export const reducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };

    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_LOAD_FOR_EDIT:
      return {
        ...state,
        pre_edit: action.payload,
      };

    default:
      return state;
  }
};
