import {
	FETCHING_EBAY,
	EBAY_FETCHED,
	EBAY_FETCH_ERROR,
} from '../actions';

const initialState = {
	products: [],
	fetchingEbay: false,
	ebayFetched: false,
	error: ''
};

export const ebayReducers = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_EBAY:
			return { ...state, fetchingPages: true };

		case EBAY_FETCHED:
			return {
				...state,
				products: action.payload,
				fetchingEbay: false,
				ebayFetched: true
			};

		case EBAY_FETCH_ERROR:
			return {
				...state,
				error: 'Error fetching ebay'
			};

		default:
			return state;
	}
};