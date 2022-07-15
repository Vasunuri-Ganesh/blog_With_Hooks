import { useState } from "react";

function CreatePost() {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [SubTitle, setSubTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("title", Title);
  }

  return (
    <div className="create-post">
      <h1>CreatePost</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input value={Title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="form-field">
          <label>SubTitle</label>
          <input
            value={SubTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea
            value={Content}
            onChange={(e) => setContent(e.target.value)}
          >
            {" "}
          </textarea>
        </div>
        <button className="create-post-btn">Create Post </button>
      </form>
    </div>
  );
}

export default CreatePost;
