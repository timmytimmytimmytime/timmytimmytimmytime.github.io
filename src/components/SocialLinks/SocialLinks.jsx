import styles from "./SocialLinks.module.css";

function SocialLinks() {
  return (
    <div className={styles.socialLinks}>

      <a
        href="https://linkedin.com/in/timothymosby"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        {/* LinkedIn */}
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M20.447 20.452h-3.554V14.83c0-1.342-.028-3.068-1.871-3.068-1.872 0-2.158 1.462-2.158 2.973v5.717H9.31V9h3.413v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.994 20.452H3.676V9h3.318v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.54C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.27V1.73C24 .774 23.2 0 22.222 0z"/>
        </svg>
        <span>LinkedIn</span>
      </a>

      <a
        href="https://github.com/timmytimmytimmytime"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        {/* GitHub */}
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1.01.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.52 11.52 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.38.82 1.13.82 2.28v3.38c0 .32.21.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
        </svg>
        <span>GitHub</span>
      </a>


      <a href="mailto:timothy.mosby@gmail.com" aria-label="Email">
        {/* Email */}
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l10-7.0V6H2zm20 12V8.24l-9.35 6.54a2 2 0 0 1-2.3 0L1.999 8.24V18h20z"/>
        </svg>
        <span>Email</span>
      </a>

      <a
        href="/assets/TimothyMosby2025Resume.pdf"
        target="_blank"
        rel="noreferrer"
        aria-label="Resume"
      >
        {/* Download / Resume */}
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M5 20h14v-2H5v2zm7-3 5-5h-3V3h-4v9H7l5 5z"/>
        </svg>
        <span>Resume</span>
      </a>
    </div>
  );
}

export default SocialLinks;
