import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeContainer } from "./containers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
