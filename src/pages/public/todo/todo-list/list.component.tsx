import React, { useContext } from "react";

import TodoListItemComponent from "./list-item.component";
import TodoFooterComponent from "../todo-footer/todo-footer.component";

import { TodoContext } from "../container/todo.context";
import { ITodoContext } from "../container/todo.types";

import { useHookList } from "./list.hook";

import { useTranslation } from "react-i18next";

const TodoList: React.FC = () => {
  const { t } = useTranslation(["common"]);
  const { state, dispatch } = useContext<ITodoContext>(TodoContext);
  const { realSize, todos, changeToggleTodo, deleteTodo } = useHookList(
    dispatch,
    state
  );

  if (realSize < 1) {
    return null;
  }

  const tooltipButton = t("delete");

  return (
    <>
      <div className="todo__list animated delay-01s fadeIn scrollbar">
        {todos.valueSeq().map((o: any, i: number) => (
          <TodoListItemComponent
            key={i}
            changeToggleTodo={changeToggleTodo}
            deleteTodo={deleteTodo}
            value={o.get("isDone")}
            keyEle={`tdl-i-${i}`}
            taskName={o.get("taskName")}
            tooltipButton={tooltipButton}
          />
        ))}
      </div>
      <TodoFooterComponent
        filter={state.get("filter")}
        todos={todos}
        dispatch={dispatch}
      />
    </>
  );
};

export default TodoList;
