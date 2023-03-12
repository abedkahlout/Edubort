import { BrowserRouter, Routes, Route } from "react-router-dom";
import Educate from "./Pages/Educate";

import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="Education" element={<Educate />} />
      </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
