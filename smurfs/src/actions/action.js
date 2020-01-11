import axios from "axios";
// import React, { useReducer } from 'react';
import smurfReducer from '../reducers/reducer';

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const POST_DATA_START = "POST_SMURF_START";
export const POST_DATA_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_DATA_FAILURE = "POST_SMURF_FAILURE";

export const DELETE_SMURF = "DELETE_SMURF";
export const UPDATE_SMURF ="UPDATE_SMURF";
export const SMURF_ERROR ="SMURF_ERROR";

// const initialState = {
//     smurf: [],
//     error: "",
//     isFetching: false,
// };

const dispatch = smurfReducer

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log("Hier ist dein smurfz", res);
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err.response);
            dispatch({
                type: FETCH_DATA_FAILURE,
                payload: `${err.response.status} ${err.response.data}`
            });
        });
};


export const addSmurf = newSmurf => dispatch => {
    console.log("Neuer smurf war geboren", newSmurf);
    dispatch({ type: POST_DATA_START });
    axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then(res=> {
            console.log("Post", res);
            dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: POST_DATA_FAILURE, payload: err });
        });
};

export const deleteSmurf = async id => {
    
    try{
     await axios.delete(`http://localhost:3333/smurfs/${id}`);
        
    dispatch({
        type: DELETE_SMURF,
        payload: id
    });
} catch (err) {
    dispatch({
        type: SMURF_ERROR,
        payload: err.response.msg
    });
}
};

export const updateSmurf = async id =>{
    try{
       const res= await axios.put(
           `http://localhost:3333/smurfs/${id}`
        )

        dispatch({
            type: UPDATE_SMURF,
            payload: res.data
        });
        
    } catch(err){
        dispatch({
            type: SMURF_ERROR,
            payload: err.response.msg
        });
    }
};