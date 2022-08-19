import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import { routes } from "./routes";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {routes.map(({ element: Element, id, title, query, ...rest }) => (
            <Route
              {...rest}
              key={id}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  {Element}
                </Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
