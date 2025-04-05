import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import StoreOne from "./pages/stores/StoreOne";
import StoreTwo from "./pages/stores/StoreTwo";
import StoreThree from "./pages/stores/StoreThree";
import StoreFour from "./pages/stores/StoreFour";
import StoreFive from "./pages/stores/StoreFive";
import StoreSix from "./pages/stores/StoreSix";
import StoreSeven from "./pages/stores/StoreSeven";
import StoreEight from "./pages/stores/StoreEight";
import StoreNine from "./pages/stores/StoreNine";

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
        <Route path="/storesix" element={<StoreSix/>} />
        <Route path="/storeseven" element={<StoreSeven/>} />
        <Route path="/storeeight" element={<StoreEight/>} />
        <Route path="/storenine" element={<StoreNine/>} />
      </Routes>
    </Router>
  );
}

export default App;
