
import {Redirect,Route, Switch} from 'react-router-dom';
//import axios from 'axios'
import Books from "./Componentes/Books/Books";
import NewBooks from './Componentes/NewBook/NewBook';
import FullBook from './Componentes/FullBook/FullBook';


const Routes = ()=>{
   
    
    
    return(
        <Switch>
          <Redirect from='/' to='/livros' exact />
          <Route path='/livros' exact>
            <Books />
          </Route>
          <Route path='/livros/novoLivro' exact>
            <NewBooks />
          </Route>
          <Route path='/livros/:id' exact>
             <FullBook/>
          </Route>
          <Route render={<div>Página não encontrada!</div>}/>
        </Switch>    
    )
}

export default Routes