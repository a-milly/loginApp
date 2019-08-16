import { UPDATE_TODOS, GET_TODOS, DELETE_TODOS } from "../actions/types";


const initialState = {
    todo: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TODOS:
           return {
               ...state,
               todo: action.payload
            }
         case GET_TODOS:
            return {
                ...state,
                todo: action.payload
             };
        case DELETE_TODOS:
            return {
                ...state,
                todo: action.payload
             };
        default:
            return state;
    }
}