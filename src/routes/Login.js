import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  // State 변수들 정의
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 처리 함수
  const handleLogin = () => {
    // 여기에 로그인 처리 로직을 넣으세요
    console.log('로그인 시도:', username, password);
  };

  return (
    <div>
      <h2>로그인</h2>
      <div>
        <label htmlFor="username">아이디:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>로그인</button>
      <div>
        로그인하지 않았나요? <Link to="/register">회원가입</Link>
      </div>
    </div>
  );
};

export default Login;
