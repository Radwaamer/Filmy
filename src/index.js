import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// font awesome css file
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
// normalize.css
import '../node_modules/normalize.css/normalize.css'
// bootstrap css files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css.map'
// css main file
import './App.css'

// font awesome css file
import '../node_modules/@fortawesome/fontawesome-free/js/all.min'
// bootstrap js files
import'../node_modules/bootstrap/dist/js/bootstrap.min'
import'../node_modules/bootstrap/dist/js/bootstrap.min.js.map'
// main js file
import { store } from './store/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter basename={'/Filmy'}>
    //     <App />
    // </BrowserRouter>
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
);
