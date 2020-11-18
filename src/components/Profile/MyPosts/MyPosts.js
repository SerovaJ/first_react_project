import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
	let posts = [
		{id: 1, message: 'It\'s your new program!', likesCount: 12},
		{id: 2, message: 'Hello!', likesCount: 11},
	]

	let postsElements = posts.map (p => <Post message = {p.message} like = {p.likesCount} />)

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
