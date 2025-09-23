import styles from "./Divider.module.css";

function Divider({ variant = "default" }) {
  return <hr className={styles[variant]} />;
}

export default Divider;
