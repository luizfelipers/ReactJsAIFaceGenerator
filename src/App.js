import axios from 'axios';
import React, {useState, } from 'react';
import './App.css';

function App() {

  const [image, setImage] = useState('');
  const handleChange = () =>{
    axios
    .get('https://api.generated.photos/api/v1/faces?api_key=_1ZR4mDJkK_X6FVQRrf8vA&gender=male&order_by=random')
    .then(res=> {
     const uri = res.data.faces[0].urls[4][512];
      uri && setImage(uri);
    })
    .catch(err => {
      console.log(err.message);
    });
  };



  return (
    <div className="App">
       <h1>Inteligência Artificial para geração de faces falsas </h1>
       {image && <img src={image} alt="AI Face" /> }
       <button type='button' onClick={handleChange}>Gerar pessoa falsa!</button>
    </div>
  );
}

export default App;
