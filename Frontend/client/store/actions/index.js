import axios from 'axios';
export const FETCHING_EBAY = 'FETCHING_EBAY';
export const EBAY_FETCHED = 'EBAY_FETCHED';
export const EBAY_FETCH_ERROR = 'EBAY_FETCH_ERROR';
export const ebayApiKey = process.env.EBAY_API_KEY;
    
export const fetchEbay = searchInput => {
	return dispatch => {
		//Action that indicates data is being fetched
		dispatch({ type: FETCHING_EBAY });
		axios
			.get(`https://svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=${ebayApiKey}&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&keywords=${searchInput}&paginationInput.entriesPerPage=6&GLOBAL-ID=EBAY-US&siteid=0`)
			.then(response => {
				dispatch({
					type: EBAY_FETCHED,
					payload: response.data
				});
			})
			.catch(err => {
				console.error(err);
				dispatch({ type: EBAY_FETCH_ERROR });
			});
	};
};