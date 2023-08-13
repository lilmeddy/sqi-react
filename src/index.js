import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Nav from './Nav'
import Model from './Model'
import reportWebVitals from './reportWebVitals';
import Glance from './Glance';
import Alumni from './Alumni'
import Africa from './Africa';
import Courses from './Courses'
import Study from './Study'
import Test from './Test'
import Tour from './Tour'
import News from './News'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Model/>
    <Glance/>
    <Alumni/>
    <Africa/>
    <Courses/>
    <Study/>
    <Test/>
    <Tour/>
    <News/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
