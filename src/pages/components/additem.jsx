import React, { useState } from 'react'
import getFirebase from './firebase'

const Additem = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [food, setFood] = useState('');
  const [alive, setAlive] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    const lazyApp = import('firebase/app');
    const lazyDatabase = import('@firebase/firestore');

    Promise.all([lazyApp, lazyDatabase])
      .then(([firebase]) => {
        const firebaseDatabase = getFirebase(firebase).firestore();
        firebaseDatabase.collection('items').add({
          name,
          type,
          food,
          alive,
        })
      })
      .then(() => setName(''), setType(''), setFood(''), setAlive(''))
  };

  return (
      <div className='wrapper'>
        <form onSubmit={onSubmit} className='header'>
            <h2>Add Item</h2>

            Name:<input
                placeholder='Name'
                value={name}
                name='name'
                onBlur={e => setName(e.currentTarget.value)}
                type='text'
            />

            Types: <select value={type} onBlur={e => setType(e.currentTarget.value)}>
                <option value=''></option>
                <option value='mammal'>mammal</option>
                <option value='reptile'>reptile</option>
                <option value='fish'>fish</option>
                <option value='amphibious'>amphibious</option>
            </select>

            Food: <select value={food} onBlur={e => setFood(e.currentTarget.value)}>
                <option value=''></option>
                <option value='carnivore'>carnivore</option>
                <option value='herbivore'>herbivore</option>
            </select>

            Alive:<select value={alive} onBlur={e => setAlive(e.currentTarget.value)}>
                <option value=''></option>
                <option value='extinct'>extinct</option>
                <option value='not_extinct'>not_extinct</option>
            </select>

          <button>Submit</button>
        </form>
      </div>
  )
};

export default Additem
