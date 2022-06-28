import { React, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const Team = lazy(() => import('./components/Team'));
const Project = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="project" element={<Project />} />
          <Route path="about" element={<Contact />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
