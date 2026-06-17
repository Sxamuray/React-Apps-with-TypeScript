import React from "react";

/**
 * Code 01 — Greeting component (converted from JavaScript to TypeScript)
 *
 * Conversion steps (JS -> TS):
 * 1) Rename the file from `.js` to `.tsx` (because it returns JSX).
 * 2) Define a `GreetingProps` type so `name` is strongly typed.
 * 3) Apply that type to the component so TypeScript can validate usage.
 */
export type GreetingProps = {
  name: string;
};

export const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
