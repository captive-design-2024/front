import React from 'react';
import { useNavigate } from 'react-router-dom';

const Board = ({ idx, title, contents, createdBy }) => {
  const navigate = useNavigate();

  const moveToUpdate = () => {
    navigate('/update/' + idx);
  };

  const deleteBoard = () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      // 여기에 삭제 로직을 추가하세요.
      alert('삭제되었습니다.');
      navigate('/board');
    }
  };

  const moveToList = () => {
    navigate('/board');
  };

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <h5>{createdBy}</h5>
        <hr />
        <p>{contents}</p>
      </div>
      <div>
        <button onClick={moveToUpdate}>수정</button>
        <button onClick={deleteBoard}>삭제</button>
        <button onClick={moveToList}>목록</button>
      </div>
    </div>
  );
};

export default Board;
