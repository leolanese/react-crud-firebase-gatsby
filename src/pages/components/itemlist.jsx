import React, { useState, useEffect } from 'react'
import '../styles/global.css'
import getFirebase from '../components/firebase'

import { Button } from 'react-bootstrap'

const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const lazyApp = import('firebase/app');
    const lazyDatabase = import('@firebase/firestore');

    const unsubscribe = Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
      const firebaseDatabase = getFirebase(firebase)
        .firestore()
        .collection('items');
      firebaseDatabase
        .onSnapshot(snapshot => {
          const listItems = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setItems(listItems);
          console.log(listItems)
        })
    });
    return () => unsubscribe
  }, []);
  return items
};

const deleteItem = id => {
  console.log(id)
  const lazyApp = import('firebase/app');
  const lazyDatabase = import('@firebase/firestore');
  Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
    const firebaseDatabase = getFirebase(firebase).firestore();
    firebaseDatabase
      .collection('items')
      .doc(id)
      .delete()
  })
};

const ItemList = ({ editItem }) => {
  const [id, setId] = useState('1');

  useEffect(() => {
    deleteItem(id);
    console.log(id, 'item deleted')
  }, [id]);
  const listItem = useItems();

  return (
    <>
      <div className='wrapper'>

        {listItem.map((item) => (
          <div className='panel' key={item.id}>
            <ul>
              <li>Name: {item.name}</li>
              <li>Type: {item.type}</li>
              <li>Food: {item.food}</li>
              <li>Alive: {item.alive}</li>
              <Button variant='primary' onClick={() => editItem(item)}>
                EDIT
              </Button>{' '}
              <Button variant='danger' onClick={() => setId(item.id)}>
                DELETE
              </Button>{' '}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
};

export default ItemList
