import { Link } from "react-router-dom";
import styles from "./Pagination.module.css";

function Pagination({ dataPerPage, totalDatas, setCurrentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDatas / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.pages}>
      {pageNumbers.map((number, index) => (
        <Link
          to=""
          onClick={() => setCurrentPage(number)}
          key={index}
          className={styles.page}
        >
          {number}
        </Link>
      ))}
    </div>
  );
}

export default Pagination;
