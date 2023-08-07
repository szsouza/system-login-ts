import { useContext } from "react";
import { AuthContext } from ".";

export const useAuth = () => {
  const Context = useContext(AuthContext);
  return Context;
};
