import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HabitList from './components/HabitList';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HabitList />} />
          {/* Dodaj inne ścieżki tutaj */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
