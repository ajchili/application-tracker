import Signup from "./components/auth/Signup";
import Dashboard from "./components/application-tracker/Dashboard";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/ForgotPassword";
import UpdateProfile from "./components/auth/UpdateProfile";

import { AuthProvider } from "./components/auth/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import './App.css'

function App() {
  return (
      <>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<PrivateRoute />}>
                <Route index element={<Dashboard />} />
              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-profile" element={<PrivateRoute />}>
                <Route index element={<UpdateProfile />} />
              </Route>
            </Routes>
          </AuthProvider>
        </Router>
      </>
  )
}

export default App;