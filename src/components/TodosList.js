import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadTodos } from "../redux/todos/actions";

const TodosList = () => {
  const dispatch = useDispatch();
  const { data: todos, isLoading } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodosList;
