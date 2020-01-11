import axiosWithAuth from "../../utils/axiosAuth";
import axios from 'axios';

//////
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
//////
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
//////
export const LOADWORKOUTS_START = 'LOADWORKOUTS_START';
export const LOADWORKOUTS_SUCCESS = 'LOADWORKOUTS_SUCCESS';
export const LOADWORKOUTS_FAIL = 'LOADWORKOUTS_FAIL';
//////
export const ADDWORKOUTS_START = 'ADDWORKOUTS_START';
export const ADDWORKOUTS_SUCCESS = 'ADDWORKOUTS_SUCCESS';
export const ADDWORKOUTS_FAIL = 'ADDWORKOUTS_FAIL';
//////
export const LOGOUT = 'LOGOUT';
//////
export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAIL = 'DELETE_FAIL';
//////
export const EDITWORKOUT_START = 'EDITWORKOUT_START';
export const EDITWORKOUT_SUCCESS = 'EDITWORKOUT_SUCCESS';
export const EDITWORKOUT_FAIL = 'EDITWORKOUT_FAIL';
export const login = (credentials) => dispatch => {
    dispatch({type: LOGIN_START});
    const baseURL = 'https://w-l-j.herokuapp.com/api/auth'
    axios
    .post(`${baseURL}/login`, credentials)
    .then(response => {
        console.log('response',response)
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', response.data.id)
        dispatch({type: LOGIN_SUCCESS, payload: response.data.id})
    })
    .catch(err => {
        dispatch({type: LOGIN_FAIL, payload: err})
        console.log('error in handleSubmit', err.response)
    })
}

export const register = (credentials) => dispatch => {
    dispatch({type: REGISTER_START});
    const baseURL = 'https://w-l-j.herokuapp.com/api/auth'
    axios
    .post(`${baseURL}/register`, credentials)
    .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', res.data.id)
        dispatch({type: REGISTER_SUCCESS, payload: res.data.id})
    })
    .catch(err => {
        dispatch({type: REGISTER_FAIL, payload: err})
        console.log(err)
    })
}

export const loadWorkouts = (id) => dispatch => {
    dispatch({type: LOADWORKOUTS_START});
    axiosWithAuth()
    .get(`/workouts/${id}`)
    .then(res => {
      console.log(res)
        dispatch({type:LOADWORKOUTS_SUCCESS, payload: res.data.workouts})
    })
    .catch(err => {
        dispatch({type: LOADWORKOUTS_FAIL, payload:err})
    })
}

export const addWorkouts = (newWorkout) => dispatch => {
    dispatch({type: ADDWORKOUTS_START });
    console.log(newWorkout)
    newWorkout.user_id = parseInt(localStorage.getItem('user'))
    axiosWithAuth()
    .post(`/Workouts/`, newWorkout)
    .then(res => {
      dispatch({type: ADDWORKOUTS_SUCCESS, payload: res.data.workouts})
    })
    .catch(err => {
      dispatch({type: ADDWORKOUTS_FAIL, payload: err})
    })
  }
  
  export const logout = () => dispatch => {
  dispatch({type: LOGOUT});
  
  }

  export const deleteWorkout = ( workout_id) => dispatch => {
    dispatch({type: DELETE_START });
    axiosWithAuth()
    .delete(`/workouts/${workout_id}`)
    .then(res => {
      dispatch({type: DELETE_SUCCESS, payload: res.data.workouts})
    })
    .catch(err => {
      dispatch({type: DELETE_FAIL, payload: err})
    })
  }
  
  export const updateWorkout = (user_id, workout_id, workout) => dispatch => {
    dispatch({type: EDITWORKOUT_START});
    axiosWithAuth()
    .put(`/workouts/${user_id}/${workout_id}`, workout)
    .then(res => {
      dispatch({type: EDITWORKOUT_SUCCESS, payload: res.data.workouts})
    })
    .catch(err => {
      console.log('e',err.message, workout)
      dispatch({type: EDITWORKOUT_FAIL, payload: err})
    })
  }