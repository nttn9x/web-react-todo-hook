import { ChangeEvent } from "react";
import {
  TOGGLE_TODO,
  REMOVE_TODO,
  VisibilityFilters
} from "../container/todo.types";

const getVisibleTodos = (todos: any, filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t: any) => t.get("isDone"));
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filterNot((t: any) => t.get("isDone"));
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export function useHookList(dispatch: any, state: any) {
  function changeToggleTodo(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: TOGGLE_TODO,
      payload: { index: parseInt(e.target.id.split("-")[2], 10) }
    });
  }

  function deleteTodo(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: REMOVE_TODO,
      payload: { index: parseInt(e.target.id.split("-")[2], 10) }
    });
  }

  const filter = state.get("filter");
  const todos = getVisibleTodos(state.get("todos"), filter);

  return {
    filter,
    todos,
    changeToggleTodo,
    deleteTodo,
    realSize: state.get("todos").size
  };
}
