import { combineReducers} from 'redux';
import ServiceReducer from './reducer_services';
import GeoReducer    from './reducer_geo';

/*
* CombineReducer
* Splitting the reducing function into separate functions,
* each managing independent parts of the state
* */

const rootReducer = combineReducers({
    services: ServiceReducer,
    location: GeoReducer
});

export default rootReducer;