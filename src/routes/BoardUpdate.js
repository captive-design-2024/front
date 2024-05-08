import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BoardUpdate = () => {
  const navigate = useNavigate();
  const { idx } = useParams();
  const [board, setBoard] = useState({
    idx: 0,
    title: '',
    createdBy: '',
    contents: '',
  });

  const { title, createdBy, contents } = board;

  const onChange = (event) => {
    const { value, name } = event.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const getBoard = () => {
    // Simulate fetching data from an API
    // You can replace this with your actual data fetching logic
    // For now, I'll just set the board data directly
    const mockBoardData = {
      idx: 1,
      title: 'Sample Title',
      createdBy: 'Sample User',
      contents: 'Sample Contents',
    };
    setBoard(mockBoardData);
  };

  const updateBoard = () => {
    // Simulate updating data on the server
    // You can replace this with your actual update logic
    alert('수정되었습니다.');
    navigate('/board/' + idx);
  };

  const backToDetail = () => {
    navigate('/board/' + idx);
  };

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <div>
      <div>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
      </div>
      <br />
      <div>
        <span>작성자</span>
        <input type="text" name="createdBy" value={createdBy} readOnly={true} />
      </div>
      <br />
      <div>
        <span>내용</span>
        <textarea
          name="contents"
          cols="30"
          rows="10"
          value={contents}
          onChange={onChange}
        ></textarea>
      </div>
      <br />
      <div>
        <button onClick={updateBoard}>수정</button>
        <button onClick={backToDetail}>취소</button>
      </div>
    </div>
  );
};

export default BoardUpdate;
