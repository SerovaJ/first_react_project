import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';


function App(props) {
	return (
		<BrowserRouter>
			<div className="Page">
				<Header />
				<Navbar />

				<div className="Content">
					<Route path = '/dialogs' render = { () => <Dialogs
						dialogsPage = {props.state.dialogsPage}
						dispatch = {props.dispatch}/>} />
					<Route path = '/profile' render = { () => <Profile
						profilePage = {props.state.profilePage}
						dispatch = {props.dispatch}/>} />
					<Route path = '/news' render = { () => <News/>} />
					<Route path = '/music' render = { () => <Music/>} />
					<Route path = '/settings' render = { () => <Settings/>} />
					<Route path = '/friends' render = { () => <Friends/>} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
