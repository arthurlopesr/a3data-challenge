import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SurgicalOrders } from "../pages/SurgicalOrders";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surgical-orders" element={<SurgicalOrders />} />
      </Routes>
    </BrowserRouter>
  );
}
