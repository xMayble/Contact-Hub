import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
      <h1 className='title_heading'>Welcome to Support Hub!</h1>
      <p className='title_paragraph'>A convenient service for the customer! Ask your problems 
        away with our specialized tools such as direct messaging with
        our talented Admins. Phone calls if you aren't the texting
        type. Pictures and videos for more clarity!
      </p>
      <form className='title_form'>
        <button className='signup'>Sign Up</button>
        <button className='login'>Login</button>
      </form>
    </div>
  );
}

export default App;
