import React from "react";
import { useSelector } from "react-redux";
import CreatePost from "./CreatePost/CreatePost";
import PostItem from "./PostItem/PostItem";

// const post = [
//   {
//     author: "Anakin Skywalker",
//     avatar:
//       "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
//     nickname: "@dart_vader",
//     date: "07.12.2021",
//     content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
//     photo:
//       "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
//     comments: 2,
//     shares: 3,
//     likes: 4,
//   },
//   {
//     author: "Lia",
//     avatar:
//       "https://app2top.ru/wp-content/uploads/2021/01/ubisoft-starwars-1024x576.jpg",
//     nickname: "@lia",
//     date: "07.12.2021",
//     content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
//     photo:
//       "https://100oboi.ru/upload/iblock/825/4_4113_star_wars_movie_poster_rey_ma.jpg",
//     comments: 5,
//     shares: 9,
//     likes: 8,
//   },
//   {
//     author: "Lia-2",
//     avatar:
//       "https://app2top.ru/wp-content/uploads/2021/01/ubisoft-starwars-1024x576.jpg",
//     nickname: "@lia_lia",
//     date: "07.12.2021",
//     content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
//     photo:
//       "https://app2top.ru/wp-content/uploads/2021/01/ubisoft-starwars-1024x576.jpg",
//     comments: 6,
//     shares: 2,
//     likes: 10,
//   },
// ];

const Post = () => {
  const posts = useSelector((state) => state.posts);
  const postItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <div>
      <CreatePost />
      <div style={postItemStyle}>
        {posts.map((post, index) => (
          <PostItem key={index} {...post} />
        ))}
      </div>
    </div>
  );
};
export default Post;
