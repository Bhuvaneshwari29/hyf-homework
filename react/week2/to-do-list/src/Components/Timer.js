import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const countTimer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearTimeout(countTimer);
    };
  });
  return <div>You have used {count} seconds on this website</div>;
}

export default Timer;
