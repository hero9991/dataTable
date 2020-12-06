export const getIsLoading = (state) => {
    return state.tablePage.isLoading;
}
export const getData = (state) => {
    return state.tablePage.data;
}
export const getActiveRowsCount = (state) => {
    return state.tablePage.activeRowsCount;
}       
export const getPortionSize = (state) => {
    return state.tablePage.portionSize;
} 