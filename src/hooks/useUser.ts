import { userState } from "@/recoil/userAtom";
import { LoggedInUserType } from "@/types/general";
import { useRecoilState } from "recoil";

const localStorageKey = "espUser";

const useUser = () => {
  const [user, setAuthData] = useRecoilState(userState);

  const setUser = (userData: LoggedInUserType) => {
    setAuthData(userData);
    localStorage.setItem(localStorageKey, JSON.stringify(userData));
  };

  const logout = () => {
    setAuthData(null);
    localStorage.removeItem(localStorageKey);
  };

  const getFromStorage = (set: boolean) => {
    const userData = localStorage.getItem(localStorageKey);
    if (userData) {
      if (set) setAuthData(JSON.parse(userData));

      return JSON.parse(userData);
    } else {
      if (set) setAuthData(null);

      return null;
    }
  };

  const checkUser = () => {
    const fromStorage = getFromStorage(false);
    if (fromStorage || user) {
      return true;
    }
    return false;
  };

  return { user, logout, setUser, getFromStorage, checkUser };
};

export default useUser;
