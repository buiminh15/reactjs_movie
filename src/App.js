import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
