import { Route, Routes } from 'react-router-dom';
import BoardList from './routes/BoardList';
import Home from './routes/Home';
import React from 'react';
// import BoardDetail from './routes/BoardDetail';
import BoardWrite from './routes/BoardWrite';
import BoardUpdate from "./routes/BoardUpdate";
import Login from './routes/Login';
import Register from './routes/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board" element={<BoardList />} />
      {/* <Route path="/board/:idx" element={<BoardDetail />} /> */}
      <Route path="/write" element={<BoardWrite />} />
      <Route path="/update/:idx" element={<BoardUpdate />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default App;