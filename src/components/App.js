import "../styles.css";
import { Route, Routes } from "react-router-dom";
import { Home, PostDetail, CreatePost, NavBar } from "./index.js";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post/:postId" element={<PostDetail />} />
        <Route exact path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}
export default App;
