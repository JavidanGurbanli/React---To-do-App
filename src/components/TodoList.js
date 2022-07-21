import TodoItem from "./TodoItem";
import React from 'react'

const TodoList = ({items, clearList, handleDelete, handleEdit}) => {
  return (
    <ul>
        <p className="list">To do list</p>
        {items.map(item => {
        return (
          <TodoItem
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        );

      })}
      <button
        type="button" className="button2" onClick={clearList}>Clear list</button>
    </ul>
  )
}

export default TodoList