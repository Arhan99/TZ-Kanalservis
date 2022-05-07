import styles from "./Table/Table.module.css";

function Row({ data }) {
  return (
    <tr>
      <td className={styles.td}>{data.date}</td>
      <td className={styles.td}>{data.name}</td>
      <td className={styles.td}>{data.quantity}</td>
      <td className={styles.td}>{data.distance}</td>
    </tr>
  );
}

export default Row;
