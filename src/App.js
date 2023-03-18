import './App.css';
//Lifting state up or pass data from child to parent
import Child from './Components/Child';

function App() {

  const omdata = (data) =>{
    console.log(data);
  }
  return (
    <div className="App">
        <Child getdata = {omdata}/>
    </div>
  );
}

export default App;
