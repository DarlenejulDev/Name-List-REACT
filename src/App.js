import React from 'react';
import logo from './logo.svg';
import './App.css';


import Person from "./components/person";

class App extends React.Component{
  state= {
    nameList: ["Darlene","Cynthia"],
    input:""
  };
  handleSubmit = (e) =>{
    const {input} = this.state

    this.setState({
      nameList:[...this.state.namelist,input]
    })
  };
  render(){
    console.log(this.state)
    return(
      <div>
      {this.state.nameList.map(name =>(
        <Person name={name} />
      ))}
      <input onChange={e => this.setState({input: e.target.value})}/>
      <button onClick = {this.handleSubmit}>Submit Name</button>
      </div>
    );
  }
}

export default App;
