import "./App.css";
import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";
import { Routes, Route } from "react-router-dom";
import Inventory from "./Component/Inventory/Inventory";
import About from "./Component/About/About";
import NotFound from "./Component/NotFound/NotFound";
import Orders from "./Component/Orders/Orders";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Shipment from "./Component/Shipment/Shipment";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment />
            </RequireAuth>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
