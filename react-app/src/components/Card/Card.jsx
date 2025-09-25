import styles from "./Card.module.css";

function normalizeSrc(src) {
  if (!src) return null;
  // absolute URLs or data URIs → leave as-is
  if (/^(https?:)?\/\//i.test(src) || src.startsWith("data:")) return src;

  // if it starts with "/", prefix the Vite base (handles GH Pages subpaths)
  if (src.startsWith("/")) {
    const base = import.meta.env.BASE_URL || "/";
    return base + src.slice(1); // avoids double slash
  }

  // relative paths (e.g., "assets/foo.gif" or imported URLs) → use as-is
  return src;
}

export default function Card({ 
  title, 
  description, 
  tags = [], 
  mediaStaticSrc,
  mediaAnimatedSrc,
  mediaAlt 
}) {
  const resolvedMediaStaticSrc = normalizeSrc(mediaStaticSrc);
  const resolvedMediaAnimatedSrc = normalizeSrc(mediaAnimatedSrc);
  

  return (
    <div className={styles.card}>
      {/* <a href=""> */}
        <div className={styles.left}>
          <div className={styles.media}>

            {/* Base/static image */}
            {resolvedMediaStaticSrc && (
              <img
                className={styles.mediaStatic}
                src={resolvedMediaStaticSrc}
                alt={mediaAlt || title}
                decoding="async"
                loading="eager"
              />
            )}

            {/* Animated GIF overlay (kept loaded; fades in on hover) */}
            {resolvedMediaAnimatedSrc && (
              <img
                className={styles.mediaAnimated}
                src={resolvedMediaAnimatedSrc}
                alt={mediaAlt || title}
                aria-hidden="true"
                decoding="async"
                loading="lazy"
              />
            )}
            
          </div>
        </div>

        <div className={styles.right}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          {tags.length > 0 && (
            <ul className={styles.tags}>
              {tags.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          )}
        </div>
      {/* </a> */}
    </div>
  );
}