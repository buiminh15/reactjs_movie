import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import { routes } from "./routes";
import { ToastContainer } from "react-toastify";

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
                <Suspense fallback={<div className="text-white">Loading...</div>}>{Element}</Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
