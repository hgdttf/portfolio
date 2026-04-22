import React from "react";
import { motion } from "framer-motion";

function Home() {
return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
<div className="card center">
        <img
        rc="https://via.placeholder.com/150"
        alt="profile"
        className="profile"
        />
        <h1>Rakshit Raj</h1>
        <p className="tagline">
        Cybersecurity | Ethical Hacking | Cloud Security
        </p>
    </div>

    <div className="card">
        <h2>About Me</h2>
        <p>
        I am a 3rd-year BTech student focused on cybersecurity, networking,
        and cloud security.
        </p>
    </div>

    <div className="card">
        <h2>Research Interests</h2>
        <ul>
        <li>Network Security</li>
        <li>Cryptography</li>
        <li>Cloud Security</li>
        <li>Penetration Testing</li>
        </ul>
    </div>

    <div className="card">
        <h2>Skills</h2>
        <div className="skills">
        <span>Python</span>
        <span>Linux</span>
        <span>Networking</span>
        <span>Ethical Hacking</span>
        </div>
    </div>

    <div className="card">
        <h2>Personal Details</h2>
        <p>Email: rakshitraj748@gmail.com</p>
        <p>Phone: +91-9304625119</p>
    </div>

    </motion.div>
);
}

export default Home;