import { useState } from "react";
import dataServiceObj from './DataService';
import styles from './Books.module.css'

function Books(){

    const [booksArray, setbooksArray]  =  useState([]);
    const [bookno, setBookno] = useState("");
    const [booktitle, setBooktitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [publisher, setPublisher] = useState("");
    const [bookImage, setBookImage] = useState("");

    function  getBooks_click()
    {
       dataServiceObj.getData().then( resData => 
        {
            setbooksArray(resData.data);
        });
    }

    function  addBook_click()
    {
        let bookObj = {};
        bookObj.booktitle = booktitle; 
        bookObj.bookno = bookno; 
        bookObj.bookAuthor = bookAuthor; 
        bookObj.year = year; 
        bookObj.genre = genre; 
        bookObj.publisher = publisher; 
        bookObj.bookImage = bookImage; 

        dataServiceObj.addData( bookObj ).then(resData => 
        {
          alert("New Book details are added to Server");
          getBooks_click();
        });
        
    }
    
    function  deleteBooks_click(bno)
    {

        dataServiceObj.deleteData( bno ).then(resData => 
        {
          alert("Books details are deleted from Server");
          getBooks_click();
        });
    }

    function  selectBooks_click(bno)
    { 
         dataServiceObj.getDataById( bno ).then(resData => 
          {
            let bookObj = resData.data;  
            setBooktitle(bookObj.booktitle);
            setBookno(bookObj.bookno);
            setBookAuthor(bookObj.bookAuthor);
            setYear(bookObj.year);
            setGenre(bookObj.genre);
            setPublisher(bookObj.publisher);
          }); 

    }

    function  updateBooks_click()
    {
        let bookObj = {};
        bookObj.booktitle = booktitle; 
        bookObj.bookno = bookno; 
        bookObj.bookAuthor = bookAuthor; 
        bookObj.year = year; 
        bookObj.genre = genre; 
        bookObj.publisher = publisher; 

        dataServiceObj.updateData( bookObj ).then(resData => 
        {
          alert("Books details are updated in  Server");
          getBooks_click();
        });
        
    }
   


    let result = booksArray.map( item => 
        <tr className="table-primary">
            <td> {item.bookno}  </td>   
            <td> {item.booktitle}  </td>               
            <td> {item.bookAuthor}  </td>  
            <td> {item.year}  </td>  
            <td> {item.genre}  </td>  
            <td> {item.publisher}  </td>  
            <td> <img className={styles.image} src={item.bookImage}/>  </td>  
            <td align="center">
                <a href="javascript:void(0);"    onClick={() => deleteBooks_click(item.bookno)}>Delete</a> |
                <a href="javascript:void(0);"  onClick={() => selectBooks_click(item.bookno)}>Select</a>
            </td>
        </tr>);

  
  return (
      <>

          <input placeholder="bookno"  value={bookno} onChange={e => setBookno(e.target.value)}  />
          <input placeholder="booktitle"  value={booktitle}  onChange={e => setBooktitle(e.target.value)}  />
          <input placeholder="bookAuthor" value={bookAuthor}  onChange={e => setBookAuthor(e.target.value)}  />
          <input placeholder="year" value={year}  onChange={e => setYear(e.target.value)}  />
          <input placeholder="genre" value={genre}  onChange={e => setGenre(e.target.value)}  />
          <input placeholder="publisher" value={publisher}  onChange={e => setPublisher(e.target.value)}  />
        <br/><br/>

          <div className="btn-group">
          <input type="button" className="btn btn-primary" value="Get Books" onClick={getBooks_click} />
          <input type="button" className="btn btn-success" value="Add Book" onClick={addBook_click} />
          <input type="button" className="btn btn-warning" value="Update Book" onClick={updateBooks_click} />
          </div>
        <br/><br/>
          <table className="table" border="2"  width="500">
              
              <thead>
                <tr className="table-success">
                  <th>Book No</th>
                  <th>Book Title</th>
                  <th>Book Author</th>               
                  <th>Year</th>
                  <th>Genre</th>
                  <th>Publisher</th>
                  <th>Book Image</th>
                  <th></th>
                </tr>  
              </thead>
            

              <tbody>
                {result}
              </tbody>
          </table>

      </>   
  );
}


export default Books;