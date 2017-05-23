import {FETCH_STATUSES, FETCH_STATUS, FETCH_MODES} from '../actions/index';

/*
* all:     state for all tfl statuses
* service: one particular tfl state
* modes:   state for different transportation services(modes)
* */
const INITIAL_STATE = {all: [], service: null, modes: [] };


/*
* Reducer - the application state
* Catching the data from the different actions
*
* */
export default function (state = INITIAL_STATE, action) {

    switch (action.type){

        case FETCH_STATUS:

            return {...state, service: action.payload.data};

        case FETCH_STATUSES:
            return { ...state, all: action.payload.data};

        case FETCH_MODES:

            return {...state, modes: action.payload.data};

        default:
            return state;
    }

}