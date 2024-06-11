import { useEffect, useReducer, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

const mockData = [
  {
    id: 1,
    isDone: false,
    title: 'aa 11 공부하기',
    date: new Date('2024-06-09').getTime(),
  },
  {
    id: 2,
    isDone: false,
    title: 'bb 22 말을 재해석하지 말고 말한 그대로 받아들이자',
    date: new Date('2024-06-10').getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.id ? { ...item, isDone: !item.isDone } : item
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (title) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        title: title,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (id) => {
    dispatch({
      type: 'UPDATE',
      id: id,
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id: id,
    });
  };

  return (
    <>
      <Header />
      <TodoCreate onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </>
  );
}

export default App;
