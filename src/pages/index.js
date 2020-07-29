import React, { useState } from 'react'
import ItemList from './components/itemlist'
import Additem from './components/additem'
import './styles/global.css'
import UpdateItem from './components/updateitem'
import getFirebase from './components/firebase'

import 'bootstrap/dist/css/bootstrap.min.css'
import { initialItemState }  from './resources/resourcesAnimal'

export default () => {

  const [editing, setEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(initialItemState);
  const [submitting, setSubmitting] = useState(false);

  const editItem = item => {
    setEditing(true);
    setCurrentItem({
      id: item.id,
      name: item.name,
      type: item.type,
      food: item.food,
      alive: item.alive,
    })
  };

  const updateItem = ({ currentItem }, updatedItem) => {
    console.log('updateItem', updatedItem, currentItem.id);

    setEditing(false);
    const lazyApp = import('firebase/app');
    const lazyDatabase = import('@firebase/firestore');

    Promise.all([lazyApp, lazyDatabase])
        .then(([firebase]) => {
          const firebaseDatabase = getFirebase(firebase).firestore();
          console.log(firebaseDatabase);
          firebaseDatabase
            .collection('items')
            .doc(currentItem.id)
            .update(updatedItem)
        })
  };

  return (
    <div>
        {editing ? (
          <UpdateItem
            setEditing={setEditing}
            currentItem={currentItem}
            updateItem={updateItem}
            submitting={submitting}
            setSubmitting={setSubmitting}
          />
        ) : (
          <Additem />
        )}
        <ItemList
          editItem={editItem} // send uniqueID
        />
    </div>
  )
}
