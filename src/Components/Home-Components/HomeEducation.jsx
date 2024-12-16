import React from "react";

const HomeEducation = () => {
  return (
    <>
      <section className="bg-white dark:bg-slate-800 text-black dark:text-white p-6 rounded-lg shadow-md mt-5">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul className="text-lg list-disc pl-6">
          <li className="mb-2">
            <strong>Bachelor's in Computer Science</strong> - XYZ University
            (2021 - Present)
          </li>
          <li className="mb-2">
            <strong>High School</strong> - ABC School (2019 - 2021)
          </li>
        </ul>
      </section>
    </>
  );
};

export default HomeEducation;
