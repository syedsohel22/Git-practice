import Link from "next/link";
import React from "react";

const App = () => {
  return (
    <div>
      <h1 className="underline">App</h1>
      <Link href="/contact">contact</Link>
    </div>
  );
};

export default App;
