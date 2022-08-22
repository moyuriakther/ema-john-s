import React from "react";

const NotFound = () => {
  return (
    <div className="d-flex w-full mt-5 justify-content-center">
      <div>
        <h1
          className="fw-bold d-flex justify-content-center"
          style={{ color: "hotPink", fontSize: "4rem" }}
        >
          404
        </h1>
        <p className="fw-bold">That page was not found!</p>
      </div>
    </div>
  );
};

export default NotFound;
