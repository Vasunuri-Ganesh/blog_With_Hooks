import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { db } from "../firebase";
function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });
        setPosts(posts);
      });
  }, []);

  return (
    <div className="home">
      <h1>Tech Blog </h1>
      <div id="blog-by"> Ganesh Vasunuri </div>
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.Title} </h3>
          </Link>
          <p>{post.SubTitle} </p>
        </div>
      ))}
    </div>
  );
}
export default Home;
