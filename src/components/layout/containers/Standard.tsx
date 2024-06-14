import React, { ReactNode } from "react";

const Standard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-4 flex-1 w-full flex item flex-col overflow-x-hidden  h-full md:px-[100px] xl:px-[200px]  pt-[20px]">
      {children}
    </div>
  );
};

export default Standard;
