import styles from "./Filter.module.css";

function Filter() {
  return (
    <div className={styles.filter}>
      <p className={styles.filterText}>Фильтрация:</p>
      <div className={styles.filterSet}>
        <select className={styles.firstList} name="sorting">
          <option value="r2">количество</option>
          <option value="r3">расстояние</option>
        </select>
        <select className={styles.secondList} name="sorting">
          <option value="r1">равно</option>
          <option value="r2">содержит</option>
          <option value="r3">больше</option>
          <option value="r3">меньше</option>
        </select>
        <input placeholder="Введите число"></input>
      </div>
    </div>
  );
}

export default Filter;
