import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, onUpdate, onDelete }) {
  const [searchInput, setSearchInput] = useState('');

  const searchChangeEvent = (e) => {
    setSearchInput(e.target.value);
  };

  // console.log(todos);

  const getFilteredData = () => {
    if (searchInput === '') {
      return todos;
    } else {
      return todos.filter((item) =>
        item.title.toUpperCase().includes(searchInput.toUpperCase())
      );
    }
  };

  const filteredData = getFilteredData();

  return (
    <div className="TodoList">
      <h3>Todo List☘️</h3>
      <div className="search_wrap">
        <input
          type="text"
          value={searchInput}
          placeholder="검색어를 입력하세요."
          onChange={searchChangeEvent}
        />
      </div>
      {filteredData.map((item) => {
        return (
          <TodoItem
            key={item.id}
            todos={item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
