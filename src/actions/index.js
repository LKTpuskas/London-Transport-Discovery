import axios from 'axios';

const TFL_STATUSES = 'https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true';
const TFL_STATUS = 'https://api.tfl.gov.uk/Line/Mode';
const TFL_MODES = 'https://api.tfl.gov.uk/Line/Meta/Modes';

/*
* Action types
* */
export const FETCH_STATUSES = 'FETCH_STATUSES';
export const FETCH_STATUS = 'FETCH_STATUS';
export const FETCH_MODES = 'TFL_MODES';
export const GET_LOCATION = 'GET_LOCATION';


/*
* Action creator
* Requests tfl statuses
* */
export function fetchStatuses() {
    const request = axios.get(TFL_STATUSES);

    return {
        type: FETCH_STATUSES,
        payload: request
    }
}

/*
 * Action creator
 * Requests tfl status for a specific transportation
 * */
export function fetchStatus(id) {
    const request = axios.get(`${TFL_STATUS}/${id}/Status?detail=true`);

    return {
        type: FETCH_STATUSES, // action
        payload: request  // data requested
    }
}

/*
 * Action creator
 * Requests tfl modes
 * */
export function fetchModes() {
    const request = axios.get(TFL_MODES);


    return {
        type: FETCH_MODES,
        payload: request
    }
}

/*
* Action creator
* Function for retrieving geo-location
* */
export function getGeoLocation () {
    const geolocation = navigator.geolocation;

    const location = new Promise((resolve, reject) => {
        if (!geolocation) {
            reject(new Error('Not Supported'));
        }

        geolocation.getCurrentPosition((position) => {

            resolve(position)
        }, () => {
            reject (new Error('Permission denied'));
        });
    });


    return {
        type: GET_LOCATION,
        payload: location
    }
}


