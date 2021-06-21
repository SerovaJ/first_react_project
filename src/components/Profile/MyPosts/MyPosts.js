import React from 'react';
import { addPostElementActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import s from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {
	let postsElements = props.posts.map ((p, index) => <Post message = {p.message} like = {p.likesCount} key = {index} />)

	let addPost = () => {
		props.dispatch(addPostElementActionCreator());
	}

	let onPostChange = (e) => {
		let textPost = e.target.value;
		props.dispatch(updateNewPostTextActionCreator(textPost));
	}


	return (
		<div className = {s.posts}>
			<h2>My posts</h2>
			<div className = {s.form}>
			<p>
				<textarea
					onChange={onPostChange}
					rows="5"
					placeholder="Your news..."
					value={props.newPostText}
				></textarea>
			</p>
			<div className = {s.wrapper_button}>
				<button onClick={addPost} className="Button">
					Add Post
				</button>
			</div>
			</div>
			{postsElements}
		</div>
	);
}

export default MyPosts;
