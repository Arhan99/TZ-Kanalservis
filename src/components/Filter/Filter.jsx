import styles from "./Filter.module.css";
import { FilterField, FilterOperator } from "../../types";

function Filter({
  filterField,
  setFilterField,
  filterOperator,
  setFilterOperator,
  filterValue,
  setFilterValue,
}) {
  return (
    <div className={styles.filter}>
      <p className={styles.filterText}>Фильтрация:</p>
      <div className={styles.filterSet}>
        <select
          onChange={(e) => setFilterField(e.target.value)}
          value={filterField}
          className={styles.firstList}
          name="sorting"
        >
          <option>------</option>
          <option value={"quantity"}>количество</option>
          <option value={"distance"}>расстояние</option>
        </select>
        <select
          onChange={(e) => setFilterOperator(e.target.value)}
          value={filterOperator}
          className={styles.secondList}
          name="sorting"
        >
          <option>------</option>
          <option value={FilterOperator.EQ}>равно</option>
          <option value={FilterOperator.IN}>содержит</option>
          <option value={FilterOperator.GT}>больше</option>
          <option value={FilterOperator.LT}>меньше</option>
        </select>
        <input
          onChange={(e) => setFilterValue(Number(e.target.value))}
          value={filterValue}
          placeholder="Введите число"
        />
      </div>
    </div>
  );
}

export default Filter;
