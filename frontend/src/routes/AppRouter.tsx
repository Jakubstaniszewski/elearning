import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import Dashboard from '../pages/Dashboard'; // przykładowa strona po zalogowaniu

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
