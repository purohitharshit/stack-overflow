import React from "react";
import "./RightSidebar.css";

const WidgetTags = () => {
  const tags = [
    "c",
    "c++",
    "javascript",
    "node",
    "html",
    "reactjs",
    "java",
    "c#",
    "expressjs",
    "jquery",
    "python",
    "monogoDB",
    "mysql",
    "css",
    "tailwind",
  ];

  return (
    <div className="widgets-tags">
      <h4>Watched tags</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
