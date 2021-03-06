import "./App.css";
import Table from "./components/Table/Table";
import Sort from "./components/Sort/Sort";
import Filter from "./components/Filter/Filter";
import Pagination from "./components/Pagination/Pagination";
import { useState, useEffect, useMemo } from "react";
import { FilterOperator, SortFilter } from "./types";

function App() {
  const [data, setData] = useState([]);
  const [sortFilter, setSortFilter] = useState();
  const [filterField, setFilterField] = useState();
  const [filterOperator, setFilterOperator] = useState();
  const [filterValue, setFilterValue] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  //сортировка данных
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
  //сортировка и фильтрация данных
  const sortedAndFilteredData = useMemo(() => {
    return sortedData.filter((row) => {
      switch (filterOperator) {
        case FilterOperator.EQ: {
          return row[filterField] === filterValue;
        }
        case FilterOperator.IN: {
          return String(row[filterField]).includes(String(filterValue));
        }
        case FilterOperator.GT: {
          return row[filterField] > filterValue;
        }
        case FilterOperator.LT: {
          return row[filterField] < filterValue;
        }
        default: {
          return true;
        }
      }
    });
  }, [sortedData, filterField, filterOperator, filterValue]);
  //пагинация
  const dataPerPage = 4;
  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const sortedAndFilteredAndPaginatedData = sortedAndFilteredData.slice(
    firstDataIndex,
    lastDataIndex
  );

  return (
    <div>
      <div className="setTable">
        <Sort sortFilter={sortFilter} setSortFilter={setSortFilter} />
        <Filter
          {...{
            filterField,
            setFilterField,
            filterOperator,
            setFilterOperator,
            filterValue,
            setFilterValue,
          }}
        />
      </div>
      <Table data={sortedAndFilteredAndPaginatedData} />
      <Pagination
        dataPerPage={dataPerPage}
        totalDatas={sortedAndFilteredData.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
