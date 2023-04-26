import React, { Component } from 'react'
import Question from './Question';
import Register from './Register';
import Greet from './Greet';
// work for fire base data base v9
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from "firebase/app";
import { getDatabase , ref ,set } from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://dj-survey-bb50d-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export class Container extends Component {
    constructor(props) {
      super(props);
      this.props=props;
    
      this.state = {
         name : null,
         email : null,
         isSubmit : false,
         questions : {
         q1 : "null",
         q2 : "null",
         q3 : "null",
         other : "null",},
         id : uuidv4(), // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
      }
    }
    // Firebase variable 
    detailsSubmitHandler =(event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log('old',this.state);
        this.setState({name , email , password},()=>{
            // console.log("new" , this.state);
        })
        // alert();
    }
    questionSubmitHandler =(event)=>{
        event.preventDefault();
        const questions={};
        questions.q1 = event.target.q1.value;
        questions.q2 = event.target.q2.value;
        questions.q3 = event.target.q3.value;
        console.log('old',this.state);
        this.setState({questions , isSubmit : true},()=>{
            console.log("new" , this.state);
        });
        // Initialize Realtime Database and get a reference to the service
        const database = getDatabase();
        set(ref(database , "dj-survey/" + this.state.id),{
          name : this.state.name,
          email : this.state.email,
          questions : this.state.questions,
        })
        // alert();
    }

  render() {
    return (
      <div className='container-fluid'>
        <div className='container card mt-2'>
            <h1 className='text-center text-primary'>DJ Tech Survey</h1>
        </div>
        {this.state.isSubmit ? <Greet/> : this.state.name === null && this.state.email === null ? <Register submit={this.detailsSubmitHandler}/>:(<Question submit={this.questionSubmitHandler}/>)}
        
        
      </div>
    )
  }
}

export default Container;
