import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import MainNavbar from "./components/shared/MainNavbar";
import FetchUser from "./components/auth/FetchUser";
import Available from "./components/pages/Available";
function App() {
  return (
    <>
      <MainNavbar />
      <FetchUser>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/available" element={<Available />} />
          </Routes>
        </>
      </FetchUser>
    </>
  );
}

export default App;
