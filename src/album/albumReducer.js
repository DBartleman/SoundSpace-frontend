import {
    FAVORITE_ALBUM, FETCH_USER_FAVORITES,
    FETCH_CURRENT_ALBUM, FETCH_SEARCH_ALBUMS, SEARCH_ALBUMS_BY_TITLE
} from "./albumActions";

import { SET_TOKEN } from "../reducers/authentication";

const initialState = {
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_ALBUMS:
            return {
                ...state,
                ...action.payload.data,
            };
        case FETCH_USER_FAVORITES:
            return {
                ...state,
                ...action.payload.albums,
            };
        case SET_TOKEN:
            return {
                ...state,
                ...action.payload.albums,
            };
        case FETCH_CURRENT_ALBUM:
            return {
                ...state,
                ...action.payload,
            };
        case SEARCH_ALBUMS_BY_TITLE:
            return {
                ...state,
                foundAlbums: action.payload,
            };
        case FAVORITE_ALBUM:
            return {
                ...state,
                ...action.payload.albums,
            };

        default:
            return state;
    }
};

export default reducer;
