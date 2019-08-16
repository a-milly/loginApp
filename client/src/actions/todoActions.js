import axios from "axios";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING, GET_TODOS } from "./types";

export const addTodo = (todoData) => dispatch => {
    axios
    .post("/api/todo/add", todoData)
    // .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
       console.log(err)
    );
};
export const updateTodo = (todoData) => dispatch => {
    axios
    .post("/api/todo/add", todoData)
    // .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
       console.log(err)
    );
};
export const getTodo = () => dispatch => {
    axios
    .get("/api/todo/all")
    .then(res => {
        console.log(res)
        dispatch({
            type: GET_TODOS,
            payload: res.data
        })
    })
    .catch(err =>
           console.log(err)
    );
};
export const deleteTodo = (id) => dispatch => {
    axios
    .get("/api/todo/"+id).then(res => {
        dispatch({
            type: GET_TODOS,
            // payload: res
        })
    })
    .catch(err =>
           console.log(err)
    );
};



