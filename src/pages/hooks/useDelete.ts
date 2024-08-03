export function useDelete(id, todo, setTodo) {
  const handleDeleteClick = (id: number) => {
    const updateTodo = todo.filter((item) => item.id !== id);
    setTodo(updateTodo);
    console.log(todo)
  };

  return { handleDeleteClick };
}
