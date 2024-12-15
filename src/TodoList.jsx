import TodoListItem from "./TodoListItem";

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
