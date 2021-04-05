//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const url = ' https://0q27loouph.execute-api.us-east-1.amazonaws.com/ '
    const [todos, setTodos] = useState()
    const fetchApi= async()=>{
        const response= await fetch(url)
        const responseJson= await response.json()
        setTodos(responseJson)
    }
    useEffect(() => {
    fetchApi()
    },[])
  return (
    <div className="App">
      hola mundo
      <ul>
          {
              !todos ? 'Cargando...' : todos.map((todo, index)=>{
                  return<li>{todo.title}</li>
              })
          }
      </ul>
    </div>
  );
}

export default App;
