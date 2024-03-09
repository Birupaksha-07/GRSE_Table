import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table1 from "./pages/Table1";
import Table2 from "./pages/Table2";
import Table3 from "./pages/Table3";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/"  element={<Table1/>} />
          <Route path="/table2"  element={<Table2/>} />
          <Route path="/table3"  element={<Table3/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
