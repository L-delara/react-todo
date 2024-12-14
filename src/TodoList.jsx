import TodoListItem from "./TodoListItem";

export default function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} title={item.title} id={item.id} />
      ))}
    </ul>
  );
}
