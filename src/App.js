import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Sidebar } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <div id="main">
          <Sidebar>
            <p>Hi</p>
          </Sidebar>
        </div>
      </Routes>
    </Router>
  );
}

export default App;
