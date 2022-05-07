import styles from "./Pagination.module.css";

function Pagination() {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className={styles.pages}>
      {pages.map((page, index) => (
        <span key={index} className={styles.page}>
          {page}
        </span>
      ))}
    </div>
  );
}

export default Pagination;
