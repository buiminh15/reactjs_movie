import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { ToastContainer } from 'react-toastify';
import { Spinner } from './components/common';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import DefaultLayout from './components/DefaultLayout/DefaultLayout'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            {routes.map(({ element: Element, id, title, query, ...rest }) => (
              <Route
                {...rest}
                key={id}
                element={
                  <Suspense
                    fallback={<Spinner spinnerStyle="absolute-center inset-0 w-screen h-screen" />}
                  >
                    {Element}
                  </Suspense>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
