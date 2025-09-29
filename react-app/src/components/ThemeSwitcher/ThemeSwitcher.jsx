import { useState } from "react";

const palettes = [
  { key: "", label: "Default" },
  { key: "palette-v2-legacy", label: "Legacy" },
  { key: "britney-chiang", label: "She's a Cool Operator" },
  { key: "papyrus", label: "Papyrus" },
  { key: "high-contrast", label: "High Contrast" },
  { key: "cyberpunk", label: "CyberPunk" },
  { key: "neon-tokyo", label: "Neon Tokyo" },
  { key: "palette-monochrome-accent", label: "Monochrome Accent" },
];

function ThemeSwitcher() {
  const [theme, setTheme] = useState("");

  const handleChange = (e) => {
    const selected = e.target.value;
    setTheme(selected);
    document.body.className = selected; // apply palette to body
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <label htmlFor="theme-select" style={{ marginRight: "0.5rem" }}>
        Theme:
      </label>
      <select
        id="theme-select"
        value={theme}
        onChange={handleChange}
        style={{
          padding: "0.5rem",
          borderRadius: "6px",
          border: "1px solid var(--color-border)",
          background: "var(--color-bg-panel)",
          color: "var(--color-text)",
        }}
      >
        {palettes.map((p) => (
          <option key={p.key} value={p.key}>
            {p.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ThemeSwitcher;
