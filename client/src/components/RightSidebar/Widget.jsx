import React from "react";
import comment from "../../assets/comment.svg";
import pen from "../../assets/pen-solid.svg";
import blacklogo from "../../assets/blacklogo.svg";
import "./RightSidebar.css";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The OverFlow blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <div className="right-sidebar-3">
            <img
              src={pen}
              alt="pen"
              style={{ width: "10px", height: "10px" }}
            />
            <p>
              Discussions now taking place across all tags on Stack Overflow
            </p>
          </div>

          <div className="right-sidebar-3">
            <img
              src={pen}
              alt="pen"
              style={{ width: "10px", height: "10px" }}
            />
            <p>Building a PDF larger than the known universe</p>
          </div>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <div className="right-sidebar-3">
            <img
              src={comment}
              alt="comment"
              style={{ width: "10px", height: "10px" }}
            />
            <p>
              What would you like to change about the moderator election
              process?
            </p>
          </div>

          <div className="right-sidebar-3">
            <img
              src={comment}
              alt="comment"
              style={{ width: "10px", height: "10px" }}
            />
            <p>Data Dumps Releases: Timeline Updates and Clarification</p>
          </div>

          <div className="right-sidebar-3">
            <img
              src={blacklogo}
              alt="blacklogo"
              style={{ width: "10px", height: "10px" }}
            />

            <p>Discussions update: Expansion to all tags</p>
          </div>

          <div className="right-sidebar-3">
            <img
              src={blacklogo}
              alt="blacklogo"
              style={{ width: "10px", height: "10px" }}
            />

            <p>January 2024 post from Ryan Polk, Chief Product Officer</p>
          </div>

          <div className="right-sidebar-3">
            <img
              src={blacklogo}
              alt="blacklogo"
              style={{ width: "10px", height: "10px" }}
            />

            <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
          </div>
        </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <div className="right-sidebar-3">
            <p style={{ padding: "0 0.4rem 0 0.4rem" }}>4</p>
            <p>
              Should [audiowaveform] tag be a (one-way) synonym of [waveform]?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
