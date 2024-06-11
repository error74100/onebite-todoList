import { useRef, useState } from 'react';
import './TodoCreate.css';

function TodoCreate({ onCreate }) {
  const [title, setTitle] = useState('');
  const inputRef = useRef();

  const inputChange = (e) => {
    setTitle(e.target.value);
  };

  const addEvent = () => {
    if (title === '') {
      alert('새로운 Todo를 입력해주세요.');
      inputRef.current.focus();
      return;
    } else {
      onCreate(title);
      setTitle('');
    }
  };

  const addKeyDown = (e) => {
    if (e.key === 'Enter') {
      addEvent();
    }
  };

  return (
    <div className="TodoCreate">
      <div className="create_input">
        <input
          type="text"
          ref={inputRef}
          value={title}
          placeholder="새로운 Todo..."
          onChange={inputChange}
          onKeyDown={addKeyDown}
        />
      </div>
      <div className="create_button">
        <button type="button" onClick={addEvent}>
          추가
        </button>
      </div>
    </div>
  );
}

export default TodoCreate;
