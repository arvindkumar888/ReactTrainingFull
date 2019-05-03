/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/
/*import {applyMiddleware, createStore} from 'redux';
import logger from "redux-logger";

const reducer = function(state,action){
    if(action.type === 'INC'){
        return state+action.payload;
    }
    if(action.type === 'DEC'){
        return state-action.payload
    }
    return state;
}
const middleware = applyMiddleware(logger);
const store = createStore(reducer, 1, middleware);

store.subscribe(()=>{
    console.log("Store Changed: "+store.getState())
});

store.dispatch({type:"INC", payload:1});
store.dispatch({type:"INC", payload:3});
store.dispatch({type:"DEC", payload:21});*/

/*import {combineReducers, applyMiddleware, createStore} from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const userReducer=(state={},action)=>{
    switch(action.type){
        case "CHANGE_NAME":{
            return state={...state, name:action.payload};
        }
        case "CHANGE_AGE":{
            return state={...state, age:action.payload};
        }
    }
    return state;
}
const tweetReducer=(state=[],action)=>{
    return state;
}
const reducers = combineReducers({
    user: userReducer,
    tweets:tweetReducer
});
 const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger)));

 store.subscribe(()=>{
     console.log("store Changed:", store.getState());
 });

 store.dispatch({type:'CHANGE_NAME', payload:'Murthy'});
 store.dispatch({type:'CHANGE_AGE', payload:35});
 store.dispatch({type:'CHANGE_NAME', payload:'Raju'});*/

/*import {applyMiddleware, createStore} from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

const initialState= {
    fetching: false,
    fetched: false,
    user: [],
    error: null
}
const reducer= (state=initialState, action)=>{
    switch(action.type){
        case "FETCH_USER_START":{
            return {...state, fetching:true}
        }
        case "FETCH_USERS_ERROR":{
            return {...state, fetching: false, error:action.payload}
        }
        case "RECEIVE_USERS":{
            return {...state, fetching: false,
            fetched:true,
            users:action.payload
            }
        }
        return state;
    }
}

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

store.dispatch((dispatch)=>{
    dispatch({type:"FETCH_USERS_START"})
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        dispatch({type:"RECIEVE_USERS", payload:response.data})
    })
    .catch((error)=>{
        dispatch({type:"FETCH_USERS_ERRORS", payload:error})
    })
})*/

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';

import allReducers from './reducers';
import App from './components/App';
import logger from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);