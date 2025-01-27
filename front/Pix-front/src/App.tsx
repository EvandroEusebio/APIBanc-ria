import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index.tsx';
import SignIn from './pages/SignIn/index.tsx';
import SignUp from './pages/SignUp/index.tsx';
import { ProtectedRoute } from './routes/ProtectRoute/index.tsx';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
