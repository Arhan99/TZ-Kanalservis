import "./App.css";
import Table from "./components/Table/Table";
import Sort from "./components/Sort/Sort";
import Filter from "./components/Filter/Filter";
import Pagination from "./components/Pagination/Pagination";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="setTable">
        <Sort />
        <Filter />
      </div>
      <Table data={data} />
      <Pagination />
    </div>
  );
}

export default App;
