import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <main>
      {/* Code 01: Greeting component */}
      <Greeting name="TypeScript" />

      {/* Code 02: Counter component */}
      <Counter />
    </main>
  );
};

export default App;
