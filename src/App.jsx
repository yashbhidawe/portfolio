import React from "react";
import * as data from "./data";

const App = () => {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface relative overflow-hidden">
      {/* TODO: Implement Bento Grid Layout here */}
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="font-display text-display-lg text-primary mb-8">
          We'll be back soon
        </h1>
        <p className="font-body text-body-md text-on-surface opacity-80">
          Rebuilding the archive in "The Modern Archivist" style...
        </p>
      </div>
    </div>
  );
};

export default App;