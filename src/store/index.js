import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import personForm from '../ducks/personForm';
import jobPage from '../ducks/jobPage';
import universityPage from '../ducks/universityPage';

const rootReducer = combineReducers({
    personForm,
    universityPage,
    jobPage,
   

});

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;