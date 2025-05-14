import React from "react";

const HomeAbout = () => {
  return (
    <>
      <section className="bg-white dark:bg-slate-800 text-black dark:text-white p-6 rounded-lg shadow-md mt-5">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <pre className="text-lg whitespace-pre-wrap ">
          {`I'm a self-taught Frontend Developer with a strong interest in building clean, responsive, and user-friendly web interfaces. I specialize in React and enjoy transforming ideas into intuitive, interactive experiences.
I'm currently exploring the MERN stack, focusing on Node.js and MongoDB to strengthen my backend understanding. Alongside this, I consistently practice Data Structures & Algorithms to improve my problem-solving skills and write efficient code.

I've worked on a variety of personal projects, including DevMate, a productivity tool for developers, and BlogHive, a full-stack blog platform — both aimed at solving real-world problems and refining my development workflow.

🔧 Tech Stack:
    React, JavaScript, Redux, Tailwind CSS, Firebase, Node.js (basic), Git, GitHub
📌 Current Focus:
    Leveling up backend fundamentals and regularly solving DSA problems.
🚀 Open To:
    Internship and entry-level roles where I can contribute, grow through hands-on experience, and collaborate with forward-thinking teams.`}
          </pre>
      </section>
    </>
  );
};

export default HomeAbout;
