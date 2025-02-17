import PropTypes from "prop-types";

export default function TodoListItem({ title, onRemoveTodo, id }) {
  return (
    <li>
      {title} <button onClick={() => onRemoveTodo(id)}>delete</button>
    </li>
  );
}

TodoListItem.propTypes = {
  title: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};
