import { ReactNode } from "react";
import { DesktopHeader } from "../header/desktop-header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-[100px] bg-[#040404]">
      <DesktopHeader />
      <div>{children}</div>
    </div>
  );
};
