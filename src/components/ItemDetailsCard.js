import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import ItemDetailsForm from './ItemDetailsForm';

export default function ItemDetailsCard({ name, description, id, removeItemById, editItemById }) {
  const [isUpdatingItem, setIsUpdatingItem] = React.useState(false);

  function removeItem() {
    removeItemById(id);
  }

  function toggleUpdatingItem() {
    setIsUpdatingItem(!isUpdatingItem);
  }

  function editItem(newValues) {
    editItemById(newValues);
    toggleUpdatingItem();
  }

  return (
    <>
      {isUpdatingItem ? (
        <ItemDetailsForm oldValues={{ name, description, id }} onSubmit={editItem} />
      ) : (
        <Card>
          <Card.Content header={name} />
          <Card.Content description={description}></Card.Content>
          <Card.Content>
            <Button icon='pencil' color='blue' content='Edit' onClick={toggleUpdatingItem} />
            <Button icon='x' color='red' content='Remove' onClick={removeItem} />
          </Card.Content>
        </Card>
      )}
    </>
  );
}
