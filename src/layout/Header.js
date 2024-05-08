import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <Link to="/">홈</Link>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <Link to="/board">게시판</Link>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <Link to="/login">로그인</Link>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <Link to="/register">회원가입</Link>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
