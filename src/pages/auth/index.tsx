import { Toaster } from "@/components/ui/toaster";
import { routeConstatns } from "@/lib/routeConstants";
import { userState } from "@/recoil/userAtom";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

const AuthLayout = () => {
  const [user] = useRecoilState(userState);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (user?.token) {
  //     navigate(routeConstatns.search.basic);
  //   }
  // }, [user?.token]);
  return (
    <div className="flex-1 h-full">
      <Outlet />
      <Toaster />
    </div>
  );
};

export default AuthLayout;
