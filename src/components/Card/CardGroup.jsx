import styles from "./Card.module.css";
import Divider from "../Divider/Divider";

export default function CardGroup({ children, title }) {
  return (
    <div>
      <h2 className={[styles.title, styles.groupTitle]}>{title}</h2>
      <Divider variant="light" /> 
      <div className={styles.cards}>{children}</div>
    </div>
  );
}
