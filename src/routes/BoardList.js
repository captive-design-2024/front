import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BoardList = () => {
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);

  const mockBoardList = [
    { idx: 1, title: 'Board 1' },
    { idx: 2, title: 'Board 2' },
    { idx: 3, title: 'Board 3' },
    // Add more mock data as needed
  ];

  const getBoardList = () => {
    // Simulate fetching data from an API
    // You can replace this with your actual data fetching logic
    // For now, I'll just set the mock data directly
    setBoardList(mockBoardList);
  };

  const moveToWrite = () => {
    navigate('/write');
  };

  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <div>
      <ul>
        {boardList.map((board) => (
          <li key={board.idx}>
            <Link to={`/board/${board.idx}`}>{board.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={moveToWrite}>글쓰기</button>
      </div>
    </div>
  );
};

export default BoardList;
