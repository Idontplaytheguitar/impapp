import axios from 'axios';


export function getBandList() {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://my-json-server.typicode.com/improvein/dev-challenge/bands');
            dispatch({
                type: 'GET_BAND_LIST',
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function getBand(id) {
    return async (dispatch) => {
        console.log(id);
        try {
            const response = await axios.get(`https://my-json-server.typicode.com/improvein/dev-challenge/bands/${id}`);
            dispatch({
                type: 'GET_BAND',
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function getGenres() {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://my-json-server.typicode.com/improvein/dev-challenge/genre');
            dispatch({
                type: 'GET_GENRES',
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function filterGenre(genre) {
    return async (dispatch) => {
        try {
            const b = await axios.get(`https://my-json-server.typicode.com/improvein/dev-challenge/bands?genre=${genre}`);
            dispatch({
                type: 'FILTER_GENRE',
                payload: { genre: genre, bands: b.data }
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function filterBandOff() {
    return {
        type: 'FILTER_BAND_OFF'
    }
}

export function getAlbums() {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://my-json-server.typicode.com/improvein/dev-challenge/albums');
            dispatch({
                type: 'GET_ALBUMS',
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function filterAlbums(id) {
    return {
        type: 'FILTER_ALBUMS',
        payload: id
    }
}

export function getBandAlbums(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://my-json-server.typicode.com/improvein/dev-challenge/albums`);
            dispatch({
                type: 'GET_BAND_ALBUMS',
                payload: { data: response.data, bandId: id }
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function sortBands(sort) {
    return {
        type: 'SORT_BANDS',
        payload: sort
    }
}