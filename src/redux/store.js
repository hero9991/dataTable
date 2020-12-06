import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
const { combineReducers, createStore, applyMiddleware } = require('redux');
const { default: tableReducer } = require("./table-reducer");




const reducers = combineReducers({
    tablePage: tableReducer,
    form: formReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
