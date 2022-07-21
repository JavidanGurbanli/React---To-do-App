import React from 'react'

const TodoInput = ({item, handleChange, handleSubmit, editItem}) => {
  return (
    <form onSubmit={handleSubmit}>
        <input placeholder="Add a todo item" type="text" value={item} onChange={handleChange}></input>
        <button className={editItem ? 'button1 add' : 'button1 edit'} type="submit">{editItem ? 'Edit item' : 'Add item'}</button>
    </form>
  )
}

export default TodoInput