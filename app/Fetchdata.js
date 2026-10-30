"use client";

import { useEffect, useState } from "react";

export default function Fetchdata() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("counter value", count);
  }, [count]);

  return (
    <div>
      <p>Welcome to my project</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}