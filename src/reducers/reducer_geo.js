import {GET_LOCATION} from '../actions/index';

const INITIAL_STATE = { coords:{ latitude: 0, longitude: 0} };

/*
* Separate reducer for geo-coords
*/
export default function (state = INITIAL_STATE, action) {

    switch (action.type){

        case GET_LOCATION:
            return {...state, coords:action.payload.coords };
        default:
            return state;
    }

}