import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NoPage from './pages/NoPage';
import Favourites from './pages/Favourites';
import Team from './pages/Team';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/pokemon/:pokemon" element={<Details />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="team" element={<Team />} />
          <Route path="*" element={<NoPage />} /> {/* 404 Page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
