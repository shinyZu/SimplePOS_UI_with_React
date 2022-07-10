import React from "react";
import Dashboard from "../pages/Dashboard";
import CustomerPage from "../pages/Customer";
import ItemPage from "../pages/Item";
import NotFound from "../pages/Session/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/customer" element={<CustomerPage />} />
      <Route path="/items" element={<ItemPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
