import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

export default function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem
          key={item.id}
          title={item.title}
          id={item.id}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  onRemoveTodo: PropTypes.func.isRequired,
};
