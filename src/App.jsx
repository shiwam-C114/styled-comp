import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
     <Button bg={"blue"} text={"Primary Button"} color={"white"} border={"solid"} />
     <br></br>
     <Button  text={"Default Button"} />
     <br></br>
     <Button  text={"Dashed Button"}  border={"dotted"}/>
     <br></br>
     <Button text='Text Button' border={"none"}/>
     <br></br>
     <Button text='Link Button' border={"none"}  color="blue"/>
    </div>
  );
}

export default App;
