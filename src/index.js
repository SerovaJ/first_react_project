import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
	{id: 1, message: 'It\'s your new program!', likesCount: 12},
	{id: 2, message: 'Hello!', likesCount: 11},
]

let dialogs = [
	{id: 1, name: 'Juliya'},
	{id: 2, name: 'Anton'},
	{id: 3, name: 'Sofiya'},
	{id: 4, name: 'Valeriya'},
]

let messages = [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'Hello'},
	{id: 3, message: 'Aloha'},
	{id: 4, message: 'How are you?'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages} />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
