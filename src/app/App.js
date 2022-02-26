import React, { useState } from 'react';
import HomeContainer from '../containers/HomeContainer';
import './App.css';


function App() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  // const handleName = async (e) => {
  //   await setName(e.target.value)
  // }

  // const handleEmail = async (e) => {
  //   await setEmail(e.target.value)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(name);
  //   console.log(email);

  //   let formData = new FormData();
  //   formData.append("text", name);
  //   formData.append("email", email);
  //   const url = "http://localhost:80/react-test/";
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: formData
  //   })
  //   .then(response => console.log(response.data))
  //   .catch(error => console.log(error));
  // }

  return (
    <div className="App">
      <HomeContainer />
      {/* <input onChange={handleName} type='text' id='name' placeholder='enter name' />
      <input onChange={handleEmail} type='text' id='email' placeholder='email' />
      <button onClick={handleSubmit} id='submit'>Save</button> */}
    </div>
  );
}

export default App;
