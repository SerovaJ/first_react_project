import React from 'react';
import s from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = (props) => {
	return(
		<div className="Profile">
			<ProfileInfo/>

			<MyPostsContainer store = {props.store}/>
		</div>
	);
}

export default Profile;
