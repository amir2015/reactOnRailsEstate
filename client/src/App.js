import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import MainNavbar from "./components/shared/MainNavbar";
import FetchUser from "./components/auth/FetchUser";
import Available from "./components/pages/Available";
import Cities from "./components/pages/Cities";
import ShowProperties from "./components/pages/ShowProperties";
import ShowAllUnits from "./components/pages/ShowAllUnits";
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
            <Route path="/cities" element={<Cities />} />
            <Route path="/units" element={<ShowProperties />} />
            <Route path="/show" element={<ShowAllUnits />} />
          </Routes>
        </>
      </FetchUser>
    </>
  );
}

export default App;
