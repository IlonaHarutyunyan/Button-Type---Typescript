import React  from 'react';

//components
import Button from './Components/Button';


const App: React.FC = () => {
 
   return (
    <Button text = "Click" variant = 'contained' disabled ={true} onClick = {() => {
      console.log('asdfg')
    }}/>
   )
}

export default App;