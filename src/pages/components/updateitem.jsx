import React, { useState, useEffect } from 'react'

const UpdateItem = ({ setEditing, currentItem, updateItem }) => {

  const [item, setItem] = useState(currentItem);

  useEffect(() => {
    setItem(currentItem);
    console.log('useEffect passes the currentItem: ', currentItem)
  }, [currentItem]);

  const onSubmit = e => {
    console.log('onSubmit passes the id and items', item);
    updateItem({ currentItem }, item);
  };

  const onBlur = e => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value })
  };

  return (
    <div className='wrapper'>
        <div className='header'>
          <h2 >Update Item</h2>
            <form onSubmit={onSubmit}>

            <input type='text' name='name' value={item.name} onChange={onBlur} />

            Type: <select name='type' onChange={onBlur}>
              <option value={item.type}>{item.type}</option>
              <option value='mammal'>mammal</option>
              <option value='reptile'>reptile</option>
              <option value='fish'>fish</option>
              <option value='amphibious'>amphibious</option>
            </select>

            Food:<select name='food' onChange={onBlur} >
              <option value={item.food}>{item.food}</option>
              <option value='carnivore'>carnivore</option>
              <option value='herbivore'>herbivore</option>
            </select>

            Alive: <select name='alive' onChange={onBlur} >
              <option value={item.alive}>{item.alive}</option>
              <option value='extinct'>extinct</option>
              <option value='not_extinct'>not_extinct</option>
            </select>

            <button>UPDATE</button>
            <button onClick={() => setEditing(false)}>CANCEL</button>
          </form>
        </div>
    </div>
  )
};

export default UpdateItem;
