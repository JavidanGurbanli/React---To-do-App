import React, { useState } from 'react'
import './index.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import uuid from 'react-uuid'
export default function App(){
  const [items, setItems] = useState([]);
  const [id, setId] = useState(uuid());
  const [item, setItem] = useState('');
  const [editItem, setEditItem] = useState(false);

  const clearList = () => {
    setItems([]);
  }
  
  const handleChange = (e) => {
    setItem(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: id,
      title: item
    }
    setItems([...items, newItem]);
    setItem('');
    setId(uuid());
    setEditItem(false);
  }
  

  const handleDelete = id => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  }

  const handleEdit = id => {
    const filteredItems = items.filter(item => item.id !== id);
    const selectedItem = items.find(item => item.id === id);
    setItems(filteredItems);
    setItem(selectedItem.title);
    setEditItem(true);
    setId(id);
  }

  return (
   <div className="container">
      <h1 className="first">To Do</h1>
      <TodoInput item={item} handleChange={handleChange} handleSubmit={handleSubmit} editItem={editItem}/>
      <TodoList items={items} clearList={clearList} handleDelete={handleDelete}handleEdit={handleEdit} />
    </div>
     )
}