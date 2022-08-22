import "./App.css";
import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";
import { Routes, Route } from "react-router-dom";
import Inventory from "./Component/Inventory/Inventory";
import About from "./Component/About/About";
import NotFound from "./Component/NotFound/NotFound";
import Orders from "./Component/Orders/Orders";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
