import styles from "./Table.module.css";
import Row from "../Row";

function Table({ data }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Дата</th>
            <th className={styles.th}>Название</th>
            <th className={styles.th}>Количество</th>
            <th className={styles.th}>Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <Row key={row._id} data={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
