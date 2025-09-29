import "./index.css";
import "./palettes.css";
import styles from "./layout.module.css";
import Background  from "./components/Background/Background";

import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";

function App() {
  return (
    <>
      <Background />
      <div className={styles.container}>
        <LeftPanel />
        <RightPanel />
      </div>
    </>
  );
}

export default App;
