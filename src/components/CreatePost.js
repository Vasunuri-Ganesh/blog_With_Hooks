import { useState } from "react";
import { db } from "../firebase";
import { useInputForm } from "./hooks";

function CreatePost() {
  const Title = useInputForm("");
  const Content = useInputForm("");
  const SubTitle = useInputForm("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("title", Title);
    db.collection("posts").add({
      Title: Title.value,
      Content: Content.value,
      SubTitle: SubTitle.value,
      timeStamp: new Date()
    });
  }

  return (
    <div className="create-post">
      <h1>CreatePost</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...Title} />
        </div>

        <div className="form-field">
          <label>SubTitle</label>
          <input {...SubTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...Content}> </textarea>
        </div>
        <button className="create-post-btn">Create Post </button>
      </form>
    </div>
  );
}

export default CreatePost;
