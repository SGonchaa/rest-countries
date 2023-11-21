import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Cards from "./Pages/Home/home";
import Country from "./Pages/country";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/country/:country" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
