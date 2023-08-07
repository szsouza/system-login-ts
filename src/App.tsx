import React, { Children } from "react";
import { AuthProvider } from "./Context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "./components/ProtectedLayout";
import Login from "./components/Login";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/teste"
            element={
              <ProtectedLayout>
                <h1>testando</h1>
              </ProtectedLayout>
            }
          />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
