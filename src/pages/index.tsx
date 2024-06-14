import { routeConstatns } from "@/lib/routeConstants";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RecoilRoot } from "recoil";

export default function RootLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // useEffect(() => {
  //   if (pathname === "/") {
  //     navigate(routeConstatns.search.basic);
  //   }
  // }, []);

  return (
    <RecoilRoot>
      <div className="  h-screen flex">
        <div className="rounded-lg p-[2px] bg-white flex-1  overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </RecoilRoot>
  );
}
