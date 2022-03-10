import React, { useCallback, useReducer, useRef } from 'react';
import './App.css';
// import Lists from "../src/components/Lists";

interface Todo {
  id: number,
  text: string,
}

type ActionType = { type: "ADD"; text: string } | { type: "REMOVE"; id: number }

function App() {
  function reducer(state: Todo[], action: ActionType) {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          },
        ];
      case 'REMOVE':
        return state.filter(({ id }) => id !== action.id);
    }
  }

  // useReducer
  const [todos, dispatch] = useReducer(reducer, []);
  const newTodoRef = useRef<HTMLInputElement>(null);

  // useCallback
  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value
      })
      newTodoRef.current.value = "";
    }
  }, [])

  return (
    <div className="App">
      {/* <Lists /> */}
      <input type="text" name="" ref={newTodoRef} id="" />
      <button onClick={onAddTodo}>Add</button>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch({
              type: "REMOVE",
              id: todo.id,
            })}>Remove</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
