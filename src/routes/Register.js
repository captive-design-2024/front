import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  // State 변수들 정의
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 회원가입 처리 함수
  const handleRegister = () => {
    // 여기에 회원가입 처리 로직을 넣으세요
    console.log('회원가입 시도:', name, username, password);
  };

  return (
    <div>
      <h2>회원가입</h2>
      <div>
        <label htmlFor="name">이름:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
      <button onClick={handleRegister}>회원가입</button>
      <div>
        이미 회원이신가요? <Link to="/login">로그인</Link>
      </div>
    </div>
  );
};

export default Register;
