import React from 'react'
import {FaPen} from "react-icons/fa";
import {FaTrashAlt} from 'react-icons/fa'

const TodoItem = ({ title, handleDelete, handleEdit }) => {
  return (
    <li className="all">
        <p className="title">◌    {title}</p>
        <i className="pen"onClick={handleEdit}><FaPen/></i>
        <i className="trash" onClick={handleDelete}><FaTrashAlt/></i>
    </li>
  )
}

export default TodoItem