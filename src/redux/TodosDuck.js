import axios from 'axios';
import { normalizeData }from '../utils'

// Action types
const LOADING = "irontodos/todos/LOADING";

const GET_TODOS_SUCCESS = "irontodos/todos/GET_TODOS_SUCCESS";
const GET_TODOS_ERROR = "irontodos/todos/GET_TODOS_ERROR";

const CREATE_TODO = "irontodos/todos/CREATE_TODO";

// Initial state
const initialState = {
   loading: false,
   results: {},
   error: undefined,
};

// Reducer
export default function reducer(state = initialState, action){
  switch(action.type) {
    case LOADING:
      return { ...state, loading: true };

    case GET_TODOS_SUCCESS:
      return { ...state, results: normalizeData(action.payload), loading: false };

    case GET_TODOS_ERROR:
        return { ...state, error: action.error, loading: false };

    case CREATE_TODO:
     return {...state, results:[...state.results, action.payload] };

     default:
       return state;
  }
}

// Action creators
export const loadingTodos = () => ({
  type: LOADING,
});

export const getTodosSuccess = (payload) => ({
  type: GET_TODOS_SUCCESS,
  payload,
});

export const getTodosError = (error) => ({
  type: GET_TODOS_ERROR,
  error,
});

export const createTodo = (payload) => ({
  type: CREATE_TODO,
  payload,
});

// Thunk! 
export const getTodos = () => (dispatch) => {
  dispatch(loadingTodos());

  return axios
   .get("http://localhost:4000/todos")
   .then((res) => {
    dispatch(getTodosSuccess(res.data));
  })
  .catch((res) => {
    dispatch(getTodosError(res.response.data));
  });
};