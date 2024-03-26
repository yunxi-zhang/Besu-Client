import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Owner from "./components/Owner";
import User from "./components/User";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/owner" element={<Owner />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
