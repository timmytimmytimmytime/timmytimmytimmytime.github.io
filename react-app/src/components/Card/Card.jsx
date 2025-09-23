// function Card({ title, text }) {
//   return (
//     <div className="card">
//       <div className="card-image">[Thumbnail Placeholder]</div>
//       <div className="card-content">
//         <h3>{title}</h3>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// }

// export default Card;

import styles from "./Card.module.css";

function Card({ title, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>[Thumbnail Placeholder]</div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
