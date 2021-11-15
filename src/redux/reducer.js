const initialState = {
    bandList: [],
    filteredBandList: [],
    filteredBands: false,
    band: {},
    genres: [],
    albums: [],
    bandAlbums: [],
};


export function rootReducer(state = initialState, action) {
    switch (action.type) {

        case 'GET_BAND_LIST':
            console.log(action.payload);
            return {
                ...state,
                bandList: action.payload
            };

        case 'GET_BAND':
            return {
                ...state,
                band: action.payload
            };

        case 'GET_GENRES':
            return {
                ...state,
                genres: action.payload
            };

        case 'FILTER_GENRE':
            return {
                ...state,
                filteredBandList: action.payload.bands.filter(band => band.genreCode === action.payload.genre),
                filteredBands: true
            };

        case 'SORT_BANDS':

            // Sort alphabetically 

            console.log(action.payload);
            if (action.payload === 'asc')
                return {
                    ...state,
                    filteredBandList: [...state.filteredBandList.sort((a, b) => (a.name > b.name) ? 1 : -1)],
                    bandList: [...state.bandList.sort((a, b) => (a.name > b.name) ? 1 : -1)]
                };
            if (action.payload === 'desc') {
                return {
                    ...state,
                    filteredBandList: [...state.filteredBandList.sort((a, b) => (a.name < b.name) ? 1 : -1)],
                    bandList: [...state.bandList.sort((a, b) => (a.name < b.name) ? 1 : -1)]
                }
            }

        case 'FILTER_BAND_OFF':
            return {
                ...state,
                filteredBands: false
            };

        case 'GET_ALBUMS':
            return {
                ...state,
                albums: action.payload
            };

        case 'FILTER_ALBUMS':
            return {
                ...state,
                albums: state.albums.filter(album => album.bandId === action.payload)
            };

        case 'GET_BAND_ALBUMS':
            return {
                ...state,
                bandAlbums: action.payload.data.filter(a => a.bandId === action.payload.bandId)
            };

        default:
            return state;
    }
}