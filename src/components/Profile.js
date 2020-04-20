import React from 'react';
import avatar from "../img/avatar.jpg";

const Profile = () => {
  return(
    <div className="content">
        <div className="image_block"></div>
        <div className="personal_data">
          <div className="avatar_block">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="data_block">
            <h2 className="name">Julia S.</h2>
            <p className="data_item">Date of Birth: 27 january</p>
            <p className="data_item">City: Voronezh</p>
            <p className="data_item">Education: KPI'09</p>
          </div>
        </div>
        <div className="content_posts">
          <h2 className="head_posts">My posts</h2>
          <form className="posts_form">
            <p className="wrapper_input">
              <textarea
                type="text"
                name="my_news"
                rows="5"
                placeholder="Your news..."
              ></textarea>
            </p>
            <div className="wrapper_button">
              <button className="button_template" type="submit">
                Send
              </button>
            </div>
          </form>
          <div className="published_posts">
            <div className="post_item">
              <p className="post_item_content">I wish spring mood!</p>
            </div>
            <div className="post_item">
              <p className="post_item_content">It's your new program!</p>
            </div>
          </div>
        </div>
      </div>
   
  );
}
export default Profile;