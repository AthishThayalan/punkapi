import "./Styles/styles.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Containers/Homepage";
import BeersPage from "./Containers/BeersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<BeersPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
