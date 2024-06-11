import './TodoItem.css';

function TodoItem({ todos, onUpdate, onDelete }) {
  const deleteEvent = () => {
    onDelete(todos.id);
  };

  const checkboxEvent = () => {
    onUpdate(todos.id);
  };

  return (
    <div className="TodoItem">
      <div className="item_check">
        <input type="checkbox" onChange={checkboxEvent} />
      </div>
      <div className="item_title">{todos.title}</div>
      <div className="item_date">
        {new Date(todos.date).toLocaleDateString()}
      </div>
      <div className="item_button">
        <button type="button" onClick={deleteEvent}>
          삭제
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
