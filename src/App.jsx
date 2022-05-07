import "./App.css";
import Table from "./components/Table/Table";
import Sort from "./components/Sort/Sort";
import Filter from "./components/Filter/Filter";
import Pagination from "./components/Pagination/Pagination";
import { useState, useEffect, useMemo } from "react";
import { SortFilter } from "./types";

function App() {
  const [data, setData] = useState([]);
  const [sortFilter, setSortFilter] = useState();

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const sortedData = useMemo(() => {
    return data.slice().sort((a, b) => {
      switch (sortFilter) {
        case SortFilter.BY_NAME: {
          return a.name.localeCompare(b.name);
        }
        case SortFilter.BY_QUANTITY: {
          return a.quantity - b.quantity;
        }
        case SortFilter.BY_DISTANCE: {
          return a.distance - b.distance;
        }
        default: {
          return -1;
        }
      }
    });
  }, [data, sortFilter]);

  return (
    <div>
      <div className="setTable">
        <Sort sortFilter={sortFilter} setSortFilter={setSortFilter} />
        <Filter />
      </div>
      <Table data={sortedData} />
      <Pagination />
    </div>
  );
}

export default App;
