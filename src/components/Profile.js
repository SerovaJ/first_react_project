import React from 'react';
import avatar from "../img/avatar.jpg";
import s from "./Profile.module.css";

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
        <div className={s.posts}>
          <h2>My posts</h2>
          <form className={s.form}>
            <p>
              <textarea
                type="text"
                name="my_news"
                rows="5"
                placeholder="Your news..."
              ></textarea>
            </p>
            <div className={s.wrapper_button}>
              <button className="button_template" type="submit">
                Send
              </button>
            </div>
          </form>
          <div className={s.published}>
            <div className={s.item}>
              <p>I wish spring mood!</p>
            </div>
            <div className={s.item}>
              <p>It's your new program!</p>
            </div>
          </div>
        </div>
      </div>
   
  );
}
export default Profile;