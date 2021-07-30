import React from 'react';
import { addPostElementActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
	let state = props.store.getState();

	let onAddPost = () => {
		props.store.dispatch(addPostElementActionCreator());
	}

	let onPostChange = (textPost) => {
		let action = updateNewPostTextActionCreator(textPost);
		props.store.dispatch(action);
	}


	return <MyPosts updateNewPostText = {onPostChange} addPost = {onAddPost}
		posts = {state.profilePage.posts}
		newPostText = {state.profilePage.newPostText}
	/>
}

export default MyPostsContainer;
