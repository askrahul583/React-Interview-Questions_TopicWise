import React from "react";

export default function ProgressBar({ value, max }) {
  return (
    <>
      <span>progress </span>
      <progress value={value} max={max} style={{ fontSize: "40px" }}></progress>
      <span>{value} %</span>
    </>
  );
}
                                   