import React from 'react';
import avatar from "./../../img/avatar.jpg";
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return(
    <div className={s.content}>
        <div className={s.image_top}></div>
        <div className={s.personal}>
          <div className={s.avatar}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={s.data}>
            <h2 className={s.name}>Julia S.</h2>
            <p className={s.data_item}>Date of Birth: 27 january</p>
            <p className={s.data_item}>City: Voronezh</p>
            <p className={s.data_item}>Education: KPI'09</p>
          </div>
        </div>

        <MyPosts/>
       
      </div>
   
  );
}
export default Profile;