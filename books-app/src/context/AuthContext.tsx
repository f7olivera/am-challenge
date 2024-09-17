import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { redirect } from "react-router-dom";

export interface User {
  token: string;
}

export interface AuthContextProps {
  user?: User;
  signIn: (userData: User) => void;
  signOut: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const [user, setUser] = useState<User>();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = await localStorage.getItem("auth-token");

      if (token) {
        setUser({ token });
      }

      setIsLoading(false);
    })();
  }, []);

  const signIn = useCallback(async (userData: User) => {
    setUser(userData);
    localStorage.setItem("auth-token", userData.token);
    redirect("/profile");
  }, []);

  const signOut = useCallback(() => {
    setUser(undefined);
    localStorage.setItem("auth-token", "");
    redirect("/");
  }, []);

  const value = useMemo(
    () => ({
      user,
      signIn,
      signOut,
      isLoading,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? "Loading..." : children}
    </AuthContext.Provider>
  );
};
