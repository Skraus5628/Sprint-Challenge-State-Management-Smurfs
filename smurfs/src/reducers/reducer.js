import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    POST_DATA_START,
    POST_DATA_SUCCESS,
    POST_DATA_FAILURE,
    DELETE_SMURF,
    UPDATE_SMURF,
} from '../actions/action';

const initialState = {
    smurf: [],
    error: "",
    isFetching: false,
};

function smurfReducer( state = initialState, action) {
    console.log(state);
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                error: "",
                isFetching: true,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: "",
                isFetching: false,
                smurf: action.payload,
            };
        case FETCH_DATA_FAILURE:
            return{
                ...state,
                error: action.payload,
                isFetching: false,
            };
        case POST_DATA_START:
            return {
                ...state,
                isFetching: true
            };
        case POST_DATA_SUCCESS:
            return{
                ...state,
                smurf: action.payload,
                isFetching: false
            };
        case POST_DATA_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            };
        case DELETE_SMURF:
            return{
                ...state,
                smurf: state.smurf.filter(
                    smurf => smurf._id !== action.payload
                ),
                isFetching: false,
                error: action.payload,
            }
        case UPDATE_SMURF:
            return{
                ...state,
                smurf: state.smurf.map(smurf =>
                    smurf._id === action.payload._id ? action.payload: smurf ),
                    isFetching: false,
            }
        default:
            return state;
    }
}

export default smurfReducer;