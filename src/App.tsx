import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import RecoveryChoice from "./pages/RecoveryChoice";
import ForgotUserId from "./pages/ForgotUserId";
import VerifyIdentity from "./pages/VerifyIdentity";
import EnterOtp from "./pages/EnterOTP";
import Success from "./pages/Success";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/recovery-choice" element={<RecoveryChoice />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-userid" element={<ForgotUserId />} />
      <Route path="/verify-identity" element={<VerifyIdentity />} />
      <Route path="/enter-otp" element={<EnterOtp />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default App;
