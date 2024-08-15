import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "/src/routes/ProtectedRoute.jsx";
import {auth} from "/src/services/api/firebase.js";

import {LoginPage} from "/src/app/pages/Auth/LoginPage.jsx";
import {SignUpPage} from "/src/app/pages/Auth/SignUpPage.jsx";
import {DashboardPage} from "/src/app/pages/DashboardPage.jsx";
import {TestPage} from "./app/pages/TestPage.jsx";

import './styles/App.css';

export default function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route exact path={'/'} element={<LoginPage />} />
        <Route exact path={'/login'} element={<LoginPage />} />
        <Route exact path={'/sign-up'} element={<SignUpPage />} />

        {/* Protected routes */}
        <Route
          exact
          path={'/bankdash'}
          element={
            <ProtectedRoute user={user}>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path={'/test'}
          element={
            <ProtectedRoute user={user}>
              <TestPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}
