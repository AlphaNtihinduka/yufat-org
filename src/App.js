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
      <Routes basename="/yufat-org">
        <Route
          path="/"
          element={(
            <Suspense fallback={(
              <div className="center">
                <div className="ring" />
                <span>loading...</span>
              </div>
          )}
            >
              <Home />
            </Suspense>
          )}
        />
        <Route
          path="team"
          element={(
            <Suspense fallback={(
              <div className="center">
                <div className="ring" />
                <span>loading...</span>
              </div>
          )}>
              {' '}
              <Team />
            </Suspense>
        )}
        />
        <Route
          path="project"
          element={(
            <Suspense fallback={(
              <div className="center">
                <div className="ring" />
                <span>loading...</span>
              </div>
          )}>
              <Project />
            </Suspense>
          )}
        />
        <Route
          path="about"
          element={(
            <Suspense fallback={(
              <div className="center">
                <div className="ring" />
                <span>loading...</span>
              </div>
          )}>
              <Contact />
            </Suspense>
          )}
        />
      </Routes>
    </div>

  );
}

export default App;
