import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from "../suggestion"

class Search extends Component {
 state = {
   query: '',
   results: []
 }

 getInfo = () => {
  axios.get("/api/data")
    .then(( {data} ) => {
      console.log(data);
      this.setState({
        results: data.data                            
      },
    console.log(this.state.results))
    })
}

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
   
   this.getInfo();
  //  () => {
  //   if (this.state.query && this.state.query.length > 1) {
  //     if (this.state.query.length % 2 === 0) {
  //       this.getInfo()
  //     }
    } 


 render() {
   return (
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <Suggestions query={this.state.query} results={this.state.results} />
     </form>
   )
 }
}

export default Search