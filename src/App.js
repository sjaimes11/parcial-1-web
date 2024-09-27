import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import RobotList from './components/RobotList';
//import RobotDetail from './RobotDetail';
import RobotDetail from './components/RobotDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/robots" element={<RobotList />} />
        <Route path="/robots/:robotId" element={<RobotDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
