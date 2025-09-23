import "./index.css";
import "./palettes.css";

import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";

function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", maxWidth: "1400px" }}>
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
