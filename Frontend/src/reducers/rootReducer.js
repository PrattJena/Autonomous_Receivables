import { combineReducers } from 'redux';
import fetchDataReducer from './fetchDataReducer'
import checkBoxReducer from './checkBoxReducer'
import addFormReducer from './addFormReducer';
import searchBarReducer from './searchBarReducer';

const rootReducers = combineReducers({
    fetchData:fetchDataReducer,
    checkBox:checkBoxReducer,
    addForm:addFormReducer,
    searchBar:searchBarReducer
})

export default rootReducers
