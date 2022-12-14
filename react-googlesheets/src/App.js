import React, { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import './App.css'
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    // this.state = {
    //    name: '',
    //    age: '',
    //    salary: '',
    //    hobby: ''
    // }
    this.state = {
      item: 'fooding',
      cup: 'Leisure',
      amount: 4000,
      breakdown: 'amala,ewedu'
   }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/ad556128-21a8-4865-8b6a-daf6ebbcdab6', this.state)
    // axios.post('https://sheets.googleapis.com/v4/spreadsheets/1OvVIZNIo1Mx0vEpiPDlMn3u0Os3pOII4MU0xPRGFjW8/values/string:append', this.state)
    .then(response => {
      console.log(response);
    })
  }
  
  render() {
    const { name, age, salary, hobby } = this.state;
    return (
      <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder='Enter your age' type="number" name = "age" value = {age} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input placeholder='Enter your salary' type="number" name = "salary" value = {salary} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input placeholder='Enter your hobby' type="text" name = "hobby" value = {hobby} onChange={this.changeHandler}/>
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}
