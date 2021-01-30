import {useState,useEffect} from 'react';
import axios from 'axios'
import Todo from "./Componentes/Todo/Todo";
import './App.css';

function App() {
  const [todos,setTodos] = useState(
    [
      {
        "userId":1,
        "id":1,
        "title":"delectus aut autem",
        "completed":false        
      },

      {
        "userId":1,
        "id":2,
        "title":"quis ut nam facilis et officia qui",
        "completed":false
                
      }

    ]

  );
  useEffect(
    () => {
      console.log('Fetch data');
      axios('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          setTodos(response.data);
        })      
        .catch( (err) => {
          console.log("Erro", err);
        })
    }, []
  )
  

// mostrar tarefas
  const [showTodos, setShowTodos] = useState(true);
  const[style, setStyle]= useState({
    backgroundColor: 'green',
    color:'white'
  });

// função enviar livros
  const onTodoSubmit =( event ) =>{
    event.preventDefault();
    //console.log(event.target.name.value)
  let newTask = {
    id: todos.length + 1,
    title: event.target.title.value,
  }
  axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log("Erro", err);
    })
  }

  const updateTodo = todos => {
   
      axios.put(`https://jsonplaceholder.typicode.com/todos/${todos.id}`, todos)
      .then((response) => {
        this.setState({todos: response.data});
      })
      .catch((error) => {
        console.log("Erro",error);
      });
  }

  

// função mudar cor do botão quando mostrar e esconder as tarefas
  const onToogleTodos = ()=>{
    setShowTodos(!showTodos);
    let newStyle = {...style};
    if(style.backgroundColor === 'green'){
      newStyle.backgroundColor = 'red';
    }else{
      newStyle.backgroundColor = 'green';
    };
    setStyle(newStyle);
  }

  // função para deletar uma tarefa
  const deleteTodoHandler = (index)=>{
    axios.delete('https://jsonplaceholder.typicode.com/todos/'+index)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log("Erro", err);
    })

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarefas</h1>
        <form id="insert-todo" onSubmit={onTodoSubmit}>   
          <div className='input-block'>                                 
            <input type="text" id="title" name="title" placeholder="Digite a tarefa" />
           
          </div>
          <input type="submit" id="button" name="button" value="Cadastrar" />
          <button type="submit" id="botao" onClick={updateTodo}>Editar</button>
        </form>
        
        <button id='btn' style={style} onClick={onToogleTodos}>Mostrar/Esconder Tarefa</button>
        
       
        {showTodos ?
          todos.map((todo, index)=>{
            return(
            <Todo
                key={todo.id}        
                title={todo.title}               
                click={ () => deleteTodoHandler(index)}                             
                >
                </Todo>            
          )
        })
        : null
      }
        
      </header>
    </div>
  );
}

export default App
