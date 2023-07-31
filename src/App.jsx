import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage/TweetsPage'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/tweets" element={<TweetsPage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
