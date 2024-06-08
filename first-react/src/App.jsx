import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import FriendData from './FriendData';


function App() {

  function handleClick(){
    alert("button Clicked1");
  }
  const showAlert = (num) =>{
    alert( num);
  }


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <FriendData></FriendData>
        <Team></Team>
        <Counter></Counter>
      </div>
      <h1>React core concepts</h1>
      <button onClick={handleClick}>click here</button>
      <button onClick={()=>{ showAlert(5)}}>click here2</button>
    </>
  )
}

export default App
