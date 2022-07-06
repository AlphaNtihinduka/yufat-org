import { React, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const Team = lazy(() => import('./components/Team'));
const Project = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback="loading..."><Home /></Suspense>

        }
        />
        <Route
          path="team"
          element={(
            <Suspense fallback="loading...">
              {' '}
              <Team />
            </Suspense>
        )}
        />
        <Route
          path="project"
          element={
            <Suspense fallback="loading..."><Project /></Suspense>

        }
        />
        <Route
          path="about"
          element={
            <Suspense fallback="loading..."><Contact /></Suspense>

        }
        />
      </Routes>
    </div>

  );
}

export default App;
