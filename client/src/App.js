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
import Footer from "./components/shared/Footer";
import FindHomes from "./components/pages/FindHomes";
import CityCost from "./components/pages/CityCost";
import NoMatch from "./components/shared/NoMatch";

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
            <Route path="/findhomes" element={<FindHomes />} />
            <Route path="/city_cost" element={<CityCost />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </>
        <Footer />
      </FetchUser>
    </>
  );
}

export default App;
