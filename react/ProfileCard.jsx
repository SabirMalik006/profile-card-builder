import React from "react";

function ProfileCard({ name, title, bio, color, skills }) {
  return (
    <div className="card">
      <div
        className="avatar"
        style={{ backgroundColor: color, width: "90px", height: "90px", borderRadius: "50%", margin: "0 auto" }}
      ></div>

      <h2 style={{ marginTop: "12px" }}>{name}</h2>
      <p style={{ marginTop: "5px", color: "#555" }}>{title}</p>

      <p style={{ marginTop: "12px", color: "#333" }}>{bio}</p>

      <div style={{ marginTop: "10px" }}>
        {skills.map((skill, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              margin: "6px 5px 0",
              padding: "6px 10px",
              background: "#e5e7eb",
              borderRadius: "20px",
              fontSize: "13px",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;