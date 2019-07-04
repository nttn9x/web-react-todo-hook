import { useReducer, Dispatch } from "react";

import { fromJS } from "immutable";

import {
  ADD_TODO,
  TOGGLE_ALL,
  TOGGLE_TODO,
  REMOVE_TODO,
  SET_FILTER,
  ITodoState,
  ITodoAction,
  VisibilityFilters
} from "./todo.types";

const initialState = new ITodoState();

function updateStatus(state: any, isCon: boolean) {
  return state.update("todos", (todos: any) =>
    todos.map((ele: any) => {
      const isDone = ele.get("isDone");

      if (isDone !== isCon) {
        return ele.set("isDone", isCon);
      }

      return ele;
    })
  );
}

function checkCondition(state: any) {
  const filter = state.get("filter");

  if (filter === VisibilityFilters.SHOW_ACTIVE) {
    return updateStatus(state, true);
  } else if (filter === VisibilityFilters.SHOW_COMPLETED) {
    return updateStatus(state, false);
  } else {
    const size = state.get("todos").size;
    if (size === state.get("todos").filter((t: any) => t.get("isDone")).size) {
      return updateStatus(state, false);
    } else {
      return updateStatus(state, true);
    }
  }
}

function reducer(state = initialState, action: ITodoAction) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO: {
      return state.update("todos", todos =>
        todos.push(fromJS({ taskName: payload.taskName, isDone: false }))
      );
    }
    case TOGGLE_TODO: {
      return state.update("todos", todos =>
        todos.update(payload.index, (item: any) => {
          return item.set("isDone", !item.get("isDone"));
        })
      );
    }
    case REMOVE_TODO: {
      return state.update("todos", todos => todos.delete(payload.index));
    }
    case SET_FILTER: {
      return state.set("filter", payload.filter);
    }
    case TOGGLE_ALL: {
      return checkCondition(state);
    }
    default:
      return state;
  }
}

export function useOwnRedux(): {
  state: ITodoState;
  dispatch: Dispatch<ITodoAction>;
} {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch
  };
}
