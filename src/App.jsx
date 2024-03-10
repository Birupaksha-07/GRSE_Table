import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table1 from "./pages/Table1";
import Table2 from "./pages/Table2";
import Table3 from "./pages/Table3";
import Search_Fun from "./pages/Search_Fun";
import Table4 from "./pages/Table4";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/"  element={<Table1/>} />
          <Route path="/table2"  element={<Table2/>} />
          <Route path="/table3"  element={<Table3/>} />
          <Route path="/table4"  element={<Table4/>} />
          <Route path="/search"  element={<Search_Fun/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
