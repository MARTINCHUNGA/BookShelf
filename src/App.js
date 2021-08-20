
import React,{Component} from "react";

import CurrentReading from "./components/CurrentReading";
import WantToRead from "./components/WantToRead";
import Read from "./components/Read";
import {getAll} from "./BooksAPI"


class App extends Component{
   
  constructor(props){
    super(props);
    this.state = {
      books : []
    }
  }
 
 componentDidMount(){
   getAll().then(res=>{
     this.setState({books:res})
   })
  
 }

 
 
  render(){
    //  const shelfs = this.state.books.map(book => book.shelf)
    // const authors = this.state.books.map(book => book.authors)
    // const title = this.state.books.map(book => book.title)

    //getting books according to shelfs
    const currentReading = this.state.books.filter(myShelf =>myShelf.shelf === "currentlyReading")
    const wantToRead = this.state.books.filter(wantShelf =>wantShelf.shelf === "wantToRead")
    const read = this.state.books.filter(readShelf =>readShelf.shelf === "read")


    console.log("currently",currentReading)
    console.log("wants",wantToRead)
    console.log("read",read)

    //filter out unwanted properties from each shelf object
  //   const extract = (currentReading, ...keys) => {
  //     const newObject = Object.assign({});
  //     Object.keys(currentReading).forEach((key) => {
  //        if(keys.includes(key)){
  //           newObject[key] = currentReading[key];
  //           delete currentReading[key];
  //        };
  //     });
  //     return newObject;
  //  };

    // console.log("working?",currentReading)
  
    // console.log("shelfs",shelfs)
    // console.log("Authors",authors)
    // console.log("Title",title)
    // console.log("All books",this.state.books)

    // const hashObject = {};
    // shelfs.forEach(item => {
    //      if(!hashObject[item] && hashObject[item] !== item) hashObject[item] = item;
    //       else return
    //      });
    // const newNonDublicatesArr = (Object.keys(hashObject).map(item => hashObject[item]))

    // console.log("Shelfs",newNonDublicatesArr)

   
    return (
      <div className="App">
         <h1>BOOK SHELF</h1>
         <CurrentReading  books={this.state.books}/>
         <WantToRead />
         <Read />
      </div>
    );
  }
 
}

export default App;
