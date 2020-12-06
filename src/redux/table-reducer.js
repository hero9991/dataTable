import { tableAPI } from "../api/api"

const SET_DATA = 'TABLE_REDUCER/SET_DATA';
const TOGGLE_PRELOADER = 'TABLE_REDUCER/TOGGLE_PRELOADER';
const TOGGLE_DISABLE = 'TABLE_REDUCER/TOGGLE_DISABLE';

const initialState = {
    data: [],
    activeData: [],
    isLoading: false,
    isDisabled: false,
    activeRowsCount: 20,
    portionSize: 20
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return { ...state, data: action.data };
        case TOGGLE_PRELOADER:
            return { ...state, isLoading: action.isLoading };
        case TOGGLE_DISABLE:
            return { ...state, isDisabled: action.isDisabled };
        default: return state;
    }
}

export const setData = (data) => ({
    type: SET_DATA,
    data
})
const togglePreloader = (isLoading) => ({
    type: TOGGLE_PRELOADER,
    isLoading
})


const requestData = async (getData, dispatch) => {
    dispatch(togglePreloader(true));
    await getData().then(response => {
        dispatch(setData(response.data));
    })
    dispatch(togglePreloader(false));
}
export const requestSmallData = () => (dispatch) => {
    requestData(tableAPI.getSmallData, dispatch);
}
export const requestBigData = () => (dispatch) => {
    requestData(tableAPI.getBigData, dispatch);
}

export default tableReducer;