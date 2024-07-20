import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPage from "./pages/ResetPage";
import BaseTemplate from "./components/BaseTemplate";
import Dashboard from "./pages/Dashboard";
import OtpPage from "./pages/OtpPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route element={<BaseTemplate />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
