import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {
	debugger;
	let postsElements = props.posts.map ((p, index) => <Post message = {p.message} like = {p.likesCount} key = {index} />)

	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange = (e) => {
		let textPost = e.target.value;
		props.updateNewPostText(textPost);
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
				<button onClick={onAddPost} className="Button">
					Add Post
				</button>
			</div>
			</div>
			{postsElements}
		</div>
	);
}

export default MyPosts;
