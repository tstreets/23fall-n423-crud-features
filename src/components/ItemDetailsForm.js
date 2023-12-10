import React from 'react';
import { Form, Card } from 'semantic-ui-react';

export default function ItemDetailsForm({ oldValues = { name: '', description: '' }, onSubmit }) {
  const [currentValues, setCurrentValues] = React.useState(oldValues);

  function changeCurrentValues(e, { name, value }) {
    setCurrentValues({ ...currentValues, [name]: value });
  }

  function formSubmitted() {
    if (currentValues.name !== '') {
      onSubmit(currentValues);
      setCurrentValues(oldValues);
    }
  }

  return (
    <>
      <Form onSubmit={formSubmitted}>
        <Card fluid>
          <Card.Content>
            <Form.Input label='Item Name' fluid name='name' onChange={changeCurrentValues} value={currentValues.name} />
          </Card.Content>
          <Card.Content>
            <Form.TextArea
              label='Item Description'
              name='description'
              onChange={changeCurrentValues}
              value={currentValues.description}
            />
          </Card.Content>
          <Card.Content>
            <Form.Button type='submit' icon='plus' color='green' content={oldValues.id ? 'Update' : 'Add'} />
          </Card.Content>
        </Card>
      </Form>
    </>
  );
}
