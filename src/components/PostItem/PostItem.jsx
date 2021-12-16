import React, { useState } from "react";
import "./PostItem.css";

const PostItem = ({
  author,
  avatar,
  nickname,
  date,
  content,
  photo,
  comments,
  shares,
  likes,
}) => {
  const [comment, setComment] = useState(0);
  const [like, setLike] = useState(false);
  const [share, setShare] = useState(false);

  return (
    <div className="post">
      <div className="post__info">
        <div className="post__avatar">
          <img className="post__avatar-img" src={avatar} alt="image" />
        </div>
        <div className="post__author">
          <p className="post__author-name">{author}</p>
          <p className="post__author-nickname">{nickname}</p>
          <div className="post__date">{date}</div>
        </div>
      </div>
      <div className="post__content">{content}</div>
      <div className="post__image">
        <img className="post__image-img" src={photo} />
      </div>
      <div className="post__activities">
        <button
          className="post__activities-btn"
          onClick={() => setComment((count) => (count ? count - 1 : count + 1))}
        >
          <i class="far fa-comment"></i>
          <span>{comments + comment}</span>
        </button>
        <button
          className="post__activities-btn"
          onClick={() => setLike((count) => (count ? count - 1 : count + 1))}
        >
          <i class="far fa-heart"></i>
          <span>{likes + like}</span>
        </button>
        <button
          className="post__activities-btn"
          onClick={() => setShare((count) => count + 1)}
        >
          <i class="fas fa-retweet"></i>
          <span>{shares + share}</span>
        </button>
      </div>
    </div>
  );
};

export default PostItem;
