import React from 'react';
import { Grid, Header, Card } from 'semantic-ui-react';
import ItemDetailsCard from '@/components/ItemDetailsCard';
import ItemDetailsForm from '@/components/ItemDetailsForm';

export default function Home() {
  const [inventory, setInventory] = React.useState([]);

  console.log(inventory);

  function addNewItem(newItemData) {
    setInventory(
      inventory.concat({
        ...newItemData,
        id: Date.now(),
      }),
    );
  }

  function removeItemById(itemId) {
    setInventory(
      inventory.filter((item) => {
        // if returns true then keep
        if (item.id !== itemId) return true;
        // if returns false then get rid of it
        else return false;
      }),
    );
  }

  function editItemById(newItemData) {
    setInventory(
      inventory.map((item) => {
        // if the item doesn't match then keep it the same
        if (item.id !== newItemData.id) return item;
        // else keep the new data
        return newItemData;
      }),
    );
  }

  return (
    <>
      <Grid columns='1'>
        <Grid.Column>
          <Header as='h1'>Home</Header>
        </Grid.Column>
        <Grid.Row columns='2'>
          <Grid.Column>
            <ItemDetailsForm onSubmit={addNewItem} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Column>
          <Card.Group itemsPerRow={4} stackable doubling>
            {inventory.map((item) => {
              return (
                <ItemDetailsCard
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  id={item.id}
                  removeItemById={removeItemById}
                  editItemById={editItemById}
                />
              );
            })}
            {/* <ItemDetailsCard name='Item Name' description='Description of the item' /> */}
          </Card.Group>
        </Grid.Column>
      </Grid>
    </>
  );
}
