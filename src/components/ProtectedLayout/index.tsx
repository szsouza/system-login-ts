import React, { ReactElement } from "react";
import { useAuth } from "../../Context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: ReactElement }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>you dont'have access</h1>;
  }

  return children;
};
