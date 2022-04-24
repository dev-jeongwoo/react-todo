import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos
        ? todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))
        : null}
    </div>
  );
};

export default TodoList;
