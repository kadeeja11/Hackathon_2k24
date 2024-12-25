// App.js
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [teamName, setTeamName] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [description, setDescription] = useState("");

  const handleRegister = async () => {
    await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, skills }),
    });
    alert("Registered successfully!");
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teamName, projectLink, description }),
    });
    alert("Submission saved!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hackathon Management Platform</h1>

      <h2>Participant Registration</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
      <button onClick={handleRegister}>Register</button>

      <h2>Project Submission</h2>
      <input placeholder="Team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
      <input placeholder="Project Link" value={projectLink} onChange={(e) => setProjectLink(e.target.value)} />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
// App.js
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [teamName, setTeamName] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [description, setDescription] = useState("");

  const handleRegister = async () => {
    await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, skills }),
    });
    alert("Registered successfully!");
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teamName, projectLink, description }),
    });
    alert("Submission saved!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hackathon Management Platform</h1>

      <h2>Participant Registration</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
      <button onClick={handleRegister}>Register</button>

      <h2>Project Submission</h2>
      <input placeholder="Team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
      <input placeholder="Project Link" value={projectLink} onChange={(e) => setProjectLink(e.target.value)} />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
