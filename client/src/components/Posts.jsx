import { useEffect, useState } from "react";

const Posts = ({ token }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const result = await fetch("/api/post", {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      });
      const data = await result.json();
      setPost(data);
    };
    fetchPost();
  }, []);

  const formatPost = (Post) => {
    return (
      <div key={`Post_${post.id}`}>
        <h2>Post: {post.id}</h2>
        <ul>
          <li>{post.title}</li>
          <li>{post.content}</li>
          <li>User: {post.user}</li>
          <li>UserID: {post.userId}</li>
        </ul>
      </div>
    );
  };

  return (
    <>
      {post.map((p) => {
        return formatPost(p);
      })}
    </>
  );
};

export default Posts;
