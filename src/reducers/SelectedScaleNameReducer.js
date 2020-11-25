import { UPDATE_SELECTED_SCALE_NAME } from 'constants/types';

const initialState = '';

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_SELECTED_SCALE_NAME:
			return action.payload;
		default:
			return state;
	}
}

export default reducer;
