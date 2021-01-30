import {BrowserRouter } from 'react-router-dom';
import Header from './Componentes/Header/Header';
import Routes from './routes'
import BooksProvider from './context/BooksProvider'

import './App.css';
function App() {
   
  return (
    <BrowserRouter>
      <Header />
     <BooksProvider>
        <Routes />
     </BooksProvider>
    </BrowserRouter>
  );
}

export default App;
