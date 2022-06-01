import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import User from './pages/User';
import { useState } from 'react';


function App() {
  
  const [users, setUsers] = useState([]);


  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path="/" element={<Main users={users} setUsers={setUsers} />} />
        <Route path="/user/:id" element={<User users={users} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
