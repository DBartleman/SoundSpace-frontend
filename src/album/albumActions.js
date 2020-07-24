import { API } from '../config';
export const FETCH_SEARCH_ALBUMS = "FETCH_SEARCH_ALBUMS";
export const SEARCH_ALBUMS_BY_TITLE = "SEARCH_ALBUMS_BY_TITLE";
export const FETCH_USER_FAVORITES = "FETCH_USER_FAVORITES";
export const FETCH_CURRENT_ALBUM = "FETCH_CURRENT_ALBUM"
export const FAVORITE_ALBUM = "FAVORITE_ALBUM"
export const EDIT_ALBUM = "EDIT_ALBUM";
export const DELETE_FAVORITE_ALBUM = "DELETE_FAVORITE_ALBUM";

export const fetchSearchAlbums = (albums) => {
    return {
        type: FETCH_SEARCH_ALBUMS,
        payload: albums,
    };
};

export const fetchCurrentAlbum = (albums) => {
    return {
        type: FETCH_CURRENT_ALBUM,
        payload: albums,
    };
};

export const fetchUserFavorites = (albums) => {
    return {
        type: FETCH_USER_FAVORITES,
        payload: albums,
    };
};

export const fetchAlbumByTitle = (payload) => ({
    type: SEARCH_ALBUMS_BY_TITLE,
    payload,
});


export const newFavoriteAlbum = (payload) => ({
    type: FAVORITE_ALBUM,
    payload,
});

export const deleteFavoriteAlbum = (payload) => ({
    type: DELETE_FAVORITE_ALBUM,
    payload,
});


export const fetchAlbums = (artist_id) => async (dispatch) => {
    const response = await fetch(`${API}/${artist_id}/albums`);
    if (response.ok) {
        const res = await response.json();
        dispatch(fetchSearchAlbums(res));
    }
};

export const getOneAlbum = (artist_id, album_id) => async (dispatch) => {
    const response = await fetch(
        `${API}/user/${artist_id}/album/${album_id}`
    );
    if (response.ok) {
        const res = await response.json();
        dispatch(fetchCurrentAlbum(res.data));
    }
};

export const getAlbumByTitle = (searchTerm) => async (dispatch) => {
    const response = await fetch(`${API}/search/album`, { // TODO: might be better as just /search? or /album/search?
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchTerm }),
    });
    if (response.ok) {
        const res = await response.json();
        dispatch(fetchAlbumByTitle(res.data));
    }
};

export const addFavorite = (user_id, album_id) => async (dispatch) => {
    const response = await fetch(`${API}/${user_id}/${album_id}/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, album_id }),
    });
    if (response.ok) {
        const res = await response.json();
        dispatch(newFavoriteAlbum(res));
    }
};

export const deleteFavorite = (user_id, album_id) => async (dispatch) => {
    const response = await fetch(`${API}/${user_id}/${album_id}/delete-favorite`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, album_id }),
    });
    if (response.ok) {
        const res = await response.json();
        dispatch(deleteFavoriteAlbum(res));
    }
};


export const loggedInAlbums = (user_id) => async (dispatch) => {
    const response = await fetch(`${API}/user/${user_id}/favorites`);
    if (response.ok) {
        const res = await response.json();
        dispatch(fetchUserFavorites(res));
    }
};
