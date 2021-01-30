import React ,{useState,useEffect}from 'react'

export const BooksContext = React.createContext();

const BooksProvider =(props) =>{
    const [books,setBooks] = useState({});

    useEffect(()=>{
        setBooks(
            [
                {
                    id:1,
                    name:'Aliberdade é uma luta constante',
                    author:'Angela Davis',
                    pages:'144'
                },
                {
                    id:2,
                    name:'Multidão: guerra e democracia na era do império',
                    author:'Antonio Negri e Michael Hardt',
                    pages:'540'
                }
            ]
        )
    },[])

      /*
    // mostrar livros
      const [showBooks, setShowBooks] = useState(true);
      const[style, setStyle]= useState({
        backgroundColor: 'green',
        color:'white'
      });
    */
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
    
    
    
      // função para deletar um livro
      const deleteBookHandler = (index)=>{
        let newBooks = books.slice(); // ou [...books]
        newBooks.splice(index, 1);
        setBooks(newBooks);
        console.log(books);
      }
    //função para alterar nome
    /*
    const updateBook = books => {
        axios.put(`http://localhost:3000/books/${books.id}`, books)
          .then(res => {
            this.setState({books: res.data});
            this.props.history.push('/livros');
          })
          .catch(err => console.log(err));
      }
    
    */

    return(
        <BooksContext.Provider value={{books:books, onBookSubmit:onBookSubmit,  deleteBookHandler:deleteBookHandler}}>
            {props.children}
         </BooksContext.Provider>
    )

}

export default BooksProvider