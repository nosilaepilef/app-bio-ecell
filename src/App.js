import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import StoreOne from "./pages/stores/StoreOne";
import StoreTwo from "./pages/stores/StoreTwo";
import StoreThree from "./pages/stores/StoreThree";
import StoreFour from "./pages/stores/StoreFour";
import StoreFive from "./pages/stores/StoreFive";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/storeone" element={<StoreOne/>} />
        <Route path="/storetwo" element={<StoreTwo/>} />
        <Route path="/storethree" element={<StoreThree/>} />
        <Route path="/storefour" element={<StoreFour/>} />
        <Route path="/storefive" element={<StoreFive/>} />
      </Routes>
    </Router>
  );
}

export default App;
