import {
  LOGIN_START,LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_START,REGISTER_SUCCESS,REGISTER_FAIL,LOADWORKOUTS_START,LOADWORKOUTS_SUCCESS,LOADWORKOUTS_FAIL
} from '../actions'

const initialState= {
  id:localStorage.getItem('user') || null,
  isLoading: false,
  error: null,
  workouts: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
        return{
            ...state,
            isLoading: true
        }

    case LOGIN_SUCCESS:
        return {
            ...state,
            isLoading: false,
            id:action.payload
        }

    case LOGIN_FAIL:
        return {
            ...state,
            isLoading: false,
            error: action.payload
        }

    case REGISTER_START:
        return{
            ...state,
            isLoading: true,
            id:action.payload
        }

    case REGISTER_SUCCESS:
        return{
            ...state,
            isLoading: false,
            id:action.payload
        }

    case REGISTER_FAIL:
        return {
            ...state, 
            isLoading: false,
            id:action.payload
        }
    case LOADWORKOUTS_START:
      return {
        ...state,
        isLoading: true,
        id:action.payload
      } 
    case LOADWORKOUTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        id:action.payload
      }
    case LOADWORKOUTS_FAIL:
      return {
        ...state,
        isLoading: false,
        id:action.payload
      }
    default:
      return state;              
  }
}

export default reducer;

