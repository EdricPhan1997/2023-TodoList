import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import type { AppState } from "../dataStructure";
import { recoilState, LocalStorageKey } from "../dataStructure";
import NewTodoTextInput from "./NewTodoInput";
import TodoList from "./TodoList";

import { Layout } from "./style";

const TodoMVC = () => {
  const appState = useRecoilValue<AppState>(recoilState);

  // Neu appState has changes, save it LocalStorage.
  useEffect((): void => {
    window.localStorage.setItem(
      LocalStorageKey.APP_STATE,
      JSON.stringify(appState) // convert JavaScript Object to string
    );
  }, [appState]);

  return (
    <Layout>
      <section className="todoapp">
        <NewTodoTextInput />
        {appState.todoList.length ? (
          <>
            <TodoList />
          </>
        ) : null}
      </section>
    </Layout>
  );
};

export default TodoMVC;
