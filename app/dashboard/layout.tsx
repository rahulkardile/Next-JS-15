import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2>Dashboard Layout</h2>
      {children}
    </div>
  );
};

export default layout;
