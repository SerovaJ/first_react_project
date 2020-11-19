import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {
	
	let postsElements = props.posts.map ((p, index) => <Post message = {p.message} like = {p.likesCount} key = {index} />)

	return (
		<div className = {s.posts}>
			<h2>My posts</h2>
			<form className = {s.form}>
			<p>
				<textarea
					type="text"
					name="my_news"
					rows="5"
					placeholder="Your news..."
				></textarea>
			</p>
			<div className = {s.wrapper_button}>
				<button className="Button" type="submit">
					Send
				</button>
			</div>
			</form>
			{postsElements}
		</div>
	);
}

export default MyPosts;
