//reducers
import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM
} from '../constants';

export const initialAlbumState = {
  albums: [],
  selectedAlbum: {}
};

export default function (state = initialAlbumState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_ALBUMS:
      newState.albums = action.albums;
      break;

    case RECEIVE_ALBUM:
      newState.selectedAlbum = action.selectedAlbum;
      break;

    default:
      return state;

  }

  return newState;

}
