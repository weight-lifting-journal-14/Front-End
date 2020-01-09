import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

const UserLog = (props) => {




  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Workout Journal</Label>
        <Input plaintext value="Unsure if this will stay" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDate">Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleTime">Time</Label>
        <Input
          type="time"
          name="time"
          id="exampleTime"
          placeholder="time placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="performed">Exercise Performed</Label>
        <Input
          type="url"
          name="url"
          id="performed"
          placeholder="type of exercise"
        />
      </FormGroup>
      <FormGroup>
        <Label for="targetRegion">Targetted Region</Label>
        <Input
          type="datetime"
          name="datetime"
          id="targetRegion"
          placeholder="muscle group/body part"
        />
      </FormGroup>
      <FormGroup>
        <Label for="repSelect">Reps</Label>
        <Input type="select" name="select" id="repSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="setSelect">Sets</Label>
        <Input type="select" name="select" id="setSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </Input>
      </FormGroup>
      <FormGroup>
      <Button type="submit">Submit</Button>
      </FormGroup>
    </Form>
  );
}

export default UserLog;