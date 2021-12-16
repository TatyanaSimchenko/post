import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/actions";
import "./CreatePost.css";

const AUTHORS = [
  {
    author: "Anakin Skywalker",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
    nickname: "@dart_vader",
  },
  {
    author: "Lia",
    avatar:
      "https://app2top.ru/wp-content/uploads/2021/01/ubisoft-starwars-1024x576.jpg",
    nickname: "@lia",
  },
  {
    author: "Lia-2",
    avatar:
      "https://app2top.ru/wp-content/uploads/2021/01/ubisoft-starwars-1024x576.jpg",
    nickname: "@lia_lia",
  },
];

const CreatePost = ({ post }) => {
  const posts = useSelector((state) => state.posts);
  const [author, setAuthor] = useState("Anakin Skywalker");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");

  const getDate = () => {
    const currentDate = new Date();
    const month = currentDate.getUTCMonth() + 1;
    const day = currentDate.getUTCDate();
    const year = currentDate.getUTCFullYear();
    return day + "." + month + "." + year;
  };

  const dispatch = useDispatch();

  const onCreatePost = (event) => {
    event.preventDefault();
    const date = getDate();
    const selectAuthor = AUTHORS.find((item) => item.author === author);
    dispatch(
      addPost({
        author: selectAuthor.author,
        avatar: selectAuthor.avatar,
        nickname: selectAuthor.nickname,
        date,
        content,
        photo,
        comments: 0,
        shares: 0,
        likes: 0,
      })
    );
    setAuthor("");
    setContent("");
    setPhoto("");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={onCreatePost}>
        <select
          className="form__info form__info-author"
          onChange={(e) => setAuthor(e.target.value)}
        >
          {AUTHORS.map((item, index) => (
            <option value={item.author} key={index}>
              {item.author}
            </option>
          ))}
        </select>
        <textarea
          className="form__info form__info-text"
          type="text"
          placeholder="Type your post here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          className="form__info form__info-link"
          type="text"
          placeholder="Paste your image link here"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button className="form__btn" type="submit" onClick={onCreatePost}>
          CREATE POST
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
