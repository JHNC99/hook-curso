import React from "react";
import { useState } from "react";
export const TernaryOperator = () => {
  const [isError, setIsError] = useState(false);
  return (
    <>
      {
        <button
          className="btn btn-outline-primary"
          onClick={() => setIsError(!isError)}
        >
          toggle error
        </button>
      }
      {isError ? (
        <p>This is a error</p>
      ) : (
        <div>
          <p>This is not a error</p>
        </div>
      )}
    </>
  );
};
