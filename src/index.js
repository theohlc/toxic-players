import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { playersReducer } from './reducers/playersReducer';
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { reportsReducer } from './reducers/reportsReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

let rootReducer = combineReducers({
  players: playersReducer, 
  reports: reportsReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
