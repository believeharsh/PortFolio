import React from "react";

const HomeConnect = () => {
  return (
    <>
      <section className="bg-white dark:bg-slate-800 text-black dark:text-white p-6 rounded-lg shadow-md mt-5">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-lg">Feel free to reach out!</p>
        <ul className="text-lg list-disc pl-6">
          <li>Email: harsh.dahiya@example.com</li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/harshdahiya"
              className="text-blue-500"
            >
              linkedin.com/in/harshdahiya
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/harshdahiya" className="text-blue-500">
              github.com/harshdahiya
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default HomeConnect;
