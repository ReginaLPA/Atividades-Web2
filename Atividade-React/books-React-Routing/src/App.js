import {useState} from 'react';
import {BrowserRouter ,Redirect,Route, Switch} from 'react-router-dom';

import Books from "./Componentes/Books/Books";

import NewBooks from './Componentes/NewBook/NewBook';
import Header from './Componentes/Header/Header';
import FullBook from './Componentes/FullBook/FullBook';

import './App.css';
function App() {
  const [books,setBooks] = useState(
    [
      {
        id:0,
        name:"A Descoberta do mundo",
        author:"Clarice Lispecto",
        pages:"480" 
      },
      {
        id:1,
        name:"Gênero e Desigualdades",
        author:"flávia Biroli",
        pages:"210" 
      }

    ]

  );
// mostrar livros
  const [showBooks, setShowBooks] = useState(true);
  const[style, setStyle]= useState({
    backgroundColor: 'green',
    color:'white'
  });

// função enviar livros
  const onBookSubmit =( event ) =>{
    event.preventDefault();
    //console.log(event.target.name.value)
    let newBooks = [...books,
      {
        id:books.length + 1,
        name: event.target.name.value,
        author: event.target.author.value,
        pages: event.target.pages.value
      }
    ];
    setBooks(newBooks)    
  }

// função mudar cor do botão quando mostrar e esconder os livros
  const onToogleBooks = ()=>{
    setShowBooks(!showBooks);
    let newStyle = {...style};
    if(style.backgroundColor === 'green'){
      newStyle.backgroundColor = 'red';
    }else{
      newStyle.backgroundColor = 'green';
    };
    setStyle(newStyle);
  }

  // função para deletar um livro
  const deleteBookHandler = (index)=>{
    let newBooks = books.slice(); // ou [...books]
    newBooks.splice(index, 1);
    setBooks(newBooks);
    console.log(books);
  }

//função para alterar nome
const componentWillMount = () =>{
  this.setState({
      updatable : true,
      name : this.props.name,
      pages : this.props.pages
  });
 this.onTodoChange = this.onTodoChange.bind(this)
}


const componentDidUpdate = ()=> {
  this.setState({
    name : this.props.name,
    pages : this.props.pages
});
  this.onTodoChange = this.onTodoChange.bind(this)
 
}

 const onChange = updatedValue =>{
  this.setState({
    fields:{
      ...this.state.fileds,
      ...updatedValue

    }
  });
};
  
  

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1>Livros</h1>
        <Switch>
          <Redirect from='/' to='/livros' exact />
          <Route path='/livros' exact>
            <Books books={books} deleteBookHandler={deleteBookHandler}/>
          </Route>
          <Route path='/livros/novoLivro' exact>
            <NewBooks onBookSubmit={onBookSubmit}/>
          </Route>
          <Route path='/livros/:id' exact>
            <FullBook books={books}/>
          </Route>
          <Route render={<div>Página não encontrada!</div>}/>
        </Switch>      
      </div>
    </BrowserRouter>
  );
}

export default App;
