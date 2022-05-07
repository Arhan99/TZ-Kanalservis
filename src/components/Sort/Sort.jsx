import styles from "./Sort.module.css";

function Sort() {
  return (
    <div className={styles.sort}>
      <p className={styles.sortText}>Сортировка:</p>
      <select name="sorting">
        <option value="r1">по названию</option>
        <option value="r2">по количеству</option>
        <option value="r3">по расстоянию</option>
      </select>
    </div>
  );
}

export default Sort;
