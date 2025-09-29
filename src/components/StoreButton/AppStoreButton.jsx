import styles from "./AppStoreButton.module.css";
import AppStoreIcon from "/assets/icons/app-store.svg";
import PlayStoreIcon from "/assets/icons/google-play.svg";

const ICONS = {
  appstore: { src: AppStoreIcon, alt: "App Store", label: "App Store" },
  playstore: { src: PlayStoreIcon, alt: "Google Play", label: "Google Play" },
};

function AppStoreButton({ href, type }) {
  const { src, alt, label } = ICONS[type] || {};

  if (!src) return null; // fail silently if wrong type

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${styles.storeBtn} ${styles[type]}`}
    >
      <img src={src} alt={alt} className={styles.icon} />
      <span>{label}</span>
    </a>
  );
}

export default AppStoreButton;
