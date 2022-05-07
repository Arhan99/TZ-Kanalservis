import { useState } from "react";
import styles from "./Sort.module.css";
import { SortFilter } from "../../types";

function Sort({ sortFilter, setSortFilter }) {
  function handleSelectChange(e) {
    setSortFilter(e.target.value);
  }

  return (
    <div className={styles.sort}>
      <p className={styles.sortText}>Сортировка:</p>
      <select value={sortFilter} name="sorting" onChange={handleSelectChange}>
        <option>------</option>
        <option value={SortFilter.BY_NAME}>по названию</option>
        <option value={SortFilter.BY_QUANTITY}>по количеству</option>
        <option value={SortFilter.BY_DISTANCE}>по расстоянию</option>
      </select>
    </div>
  );
}

export default Sort;
