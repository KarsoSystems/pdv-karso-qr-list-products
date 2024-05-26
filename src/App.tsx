import React, { useEffect } from "react";
import { RoutesList } from "./utils/routes";
import { CssBaseline } from "@mui/material";
import { getUserLogin, selectUser } from "./store/slices/loginSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import TemaPrincipal from "./styles/TemaPrincipal";
import FondoDegradado from "./components/layouts/FondoDegradado";
import ProtectedRoutes from "./components/Protected/ProtectedRoutes";
import "./styles/globals.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

const App = () => {
  const stUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const userLogin = localStorage.getItem("sesion");
  const parseUser = userLogin ? JSON.parse(userLogin) : null;

  useEffect(() => {
    dispatch(getUserLogin({ user: parseUser }));
  }, []);

  return (
    <TemaPrincipal>
      <CssBaseline />
      <FondoDegradado />
      <Router>
        <Routes>
          {RoutesList.routesItems.map((itemRoute) => {
            return (
              <Route
                key={itemRoute.path}
                path={itemRoute.path}
                element={
                  <ProtectedRoutes
                    user={stUser || parseUser}
                    isProtect={itemRoute.protected}
                  >
                    {itemRoute.redirect === "" ? (
                      <itemRoute.element />
                    ) : (
                      <Navigate to={itemRoute.redirect} />
                    )}
                  </ProtectedRoutes>
                }
              >
                {itemRoute.nested.map((nestedRoutes) => {
                  return (
                    <Route
                      key={nestedRoutes.path}
                      path={nestedRoutes.path}
                      element={<nestedRoutes.element />}
                    />
                  );
                })}
              </Route>
            );
          })}
        </Routes>
      </Router>
    </TemaPrincipal>
  );
};

export default App;
