import { is } from "immutable";
import { createSelectorCreator, defaultMemoize } from "reselect";
import { VisibilityFilters } from "./todo.types";

const createImmutableSelector = createSelectorCreator(defaultMemoize, is);

const getVisibilityFilter = (state: any) => state.get("filter");

const getTodos = (state: any) => state.get("todos");

export const getVisibleTodos = createImmutableSelector(
  [getVisibilityFilter, getTodos],
  (filter, todos) => {
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
  }
);
