import { UPDATE_CHORDS } from 'constants/types';

import chords from 'data/chords.json';

const initialState = chords;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHORDS:
			return action.payload;
    default:
      return state;
  }
}

export default reducer;
