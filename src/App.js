import { BrowserRouter, Routes, Route } from "react-router-dom";
import Educate from "./Pages/Educate";
import Err from "./Pages/Err";

import Home from './Pages/Home';
import Login from './Pages/Login';
import Test from "./Pages/Test";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="Education" element={<Educate />} />
        <Route path="Test" element={<Test />}/>
        <Route path="*" element={<Err />} />
      </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
