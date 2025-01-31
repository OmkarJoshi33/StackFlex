import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./LoginPage/Login.jsx";
import Signup from "./SignupPage/Signup.jsx";
import ForgotPassword from "./ForgotPwd/ForgotPassword.jsx";
import PageLayout from "./Layouts/PageLayout.jsx";
import Search from "./Search/Search.jsx";
import Message from "./Message/Message.jsx";
import Profile from "./Profile/Profile.jsx";
import MainHome from "./MainHome/MainHome.jsx";
import Create from "./Create/Create.jsx";
import Notifications from "./Notifications/Notifications.jsx";
import AdminHome from "./adminhome/AdminHome.jsx";
import { UserProvider } from "./component/userContext.jsx"; // Import UserProvider

function App() {
  return (
    <UserProvider> {/* Wrap everything in UserProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<PageLayout />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/home/mainhome" element={<MainHome />} />
          <Route path="/home/Search" element={<Search />} />
          <Route path="/home/Create" element={<Create />} />
          <Route path="/home/Message" element={<Message />} />
          <Route path="/home/Notifications" element={<Notifications />} />
          <Route path="/home/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
