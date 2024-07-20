import { useState } from "react";
import "../style/BlogPage.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
  ]
};

const BlogPost = () => {
  const [value, setValue] = useState("");
  
  return (
    <div className="container">
      <div className="row">
        <div className="editor">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="editor-input"
            modules={modules}
          />
        </div>
        <div className="preview">{value}</div>
        <div className="preview" dangerouslySetInnerHTML={{__html:value}} />
      </div>
    </div>
  );
};

export default BlogPost;
