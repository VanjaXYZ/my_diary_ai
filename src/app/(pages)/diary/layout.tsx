import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row justify-between p-8 bg-white m-auto space-y-12">
      {children}
    </div>
  );
};

export default layout;
