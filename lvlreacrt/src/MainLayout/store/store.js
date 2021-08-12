import { createStore,applyMiddleware } from 'redux'
import rootReducer from "./user/rootReducer"
import ThunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
 const  middleware=[ThunkMiddleware];
 const store= createStore (rootReducer,composeWithDevTools(
    applyMiddleware(...middleware),
));

export default store;