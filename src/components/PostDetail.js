import { useState, useEffect } from "react";
import { db } from "../firebase";
import { useParams } from "react-router-dom";

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    db.collection("posts")
      .doc(postId)
      .get()
      .then((snapshot) => {
        setPost(snapshot.data());
      });
  }, []);
  return (
    <div className="post-detail">
      <h1>{post.Title} </h1>
      <p>{post.Content} </p>
    </div>
  );
}
export default PostDetail;
