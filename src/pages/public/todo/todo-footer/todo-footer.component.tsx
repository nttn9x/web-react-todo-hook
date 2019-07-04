import React from "react";

import { useTranslation } from "react-i18next";

import { SET_FILTER, VisibilityFilters } from "../container/todo.types";

interface FooterProps {
  filter: string;
  todos: any;
  dispatch: any;
}

const Footer: React.FC<FooterProps> = ({ filter, todos, dispatch }) => {
  const { t } = useTranslation(["common"]);
  const sizeOfTasks = todos.size;

  function doFilter(filterValue: string) {
    dispatch({
      type: SET_FILTER,
      payload: { filter: filterValue }
    });
  }

  return (
    <footer className="todo__footer">
      <div className="todo__footer__count">
        {sizeOfTasks < 2
          ? `${sizeOfTasks} ${t("item")}`
          : `${sizeOfTasks} ${t("items")}`}
      </div>
      <div className="todo__footer__actions">
        <div
          id="tdp-f-1"
          className={`todo__footer__actions__item animated delay-02s tada${
            filter === VisibilityFilters.SHOW_ALL
              ? " todo__footer__actions__item--selected"
              : ""
          }`}
          onClick={() => doFilter(VisibilityFilters.SHOW_ALL)}
        >
          {t("all")}
        </div>
        <div
          id="tdp-f-2"
          className={`todo__footer__actions__item${
            filter === VisibilityFilters.SHOW_ACTIVE
              ? " todo__footer__actions__item--selected"
              : ""
          }`}
          onClick={() => doFilter(VisibilityFilters.SHOW_ACTIVE)}
        >
          {t("active")}
        </div>
        <div
          id="tdp-f-3"
          className={`todo__footer__actions__item${
            filter === VisibilityFilters.SHOW_COMPLETED
              ? " todo__footer__actions__item--selected"
              : ""
          }`}
          onClick={() => doFilter(VisibilityFilters.SHOW_COMPLETED)}
        >
          {t("completed")}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
