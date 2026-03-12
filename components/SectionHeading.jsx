import clsx from "clsx";
import React from "react";

const SectionHeading = ({ text, className }) => {
  return (
    <div
      className={clsx(
        "text-white mb-5 text-3xl sm:text-4xl font-bold",
        className,
      )}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default SectionHeading;
