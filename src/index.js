import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/redux-store';
import * as serviceWorker from './serviceWorker';

let state = store.getState();

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App store = {store} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTree(state);

store.subscribe(() => {
	rerenderEntireTree(state);
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
