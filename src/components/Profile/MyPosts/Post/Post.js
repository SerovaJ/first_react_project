import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  
  return (
    <div className={s.published}>
    <div className={s.item}>
      <p>{props.message}</p>
    </div>
  <p className={s.like}>Like: {props.like}</p>
    </div>
  );
};
export default Post;
