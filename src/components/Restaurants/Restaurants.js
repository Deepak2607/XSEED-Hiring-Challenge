import React, { Component } from 'react';
import axios from 'axios';
import Restaurant from "./Restaurant";
import Navbar from "../Navbar/Navbar";

class Restaurants extends Component{
    
    constructor(){
        super();
        
        this.state={
            restaurants:[],
            filteredRestaurants:[],
            query: '',
            query2: '',
            currentPage:0,
            disable1:true,
            disable2:false
        } 
    }
        
        
        componentDidMount=()=> {
            //fetching restaurants details
            axios.get("https://deepak2607.github.io/XSEED_restaurants.json").then(response=>{
                
                const restaurants= response.data; 
                console.log(restaurants);
                const { query } = this.state;
                
//                let filteredData = restaurants.filter(restaurant => {
//                  return restaurant.Restaurant_Name.toLowerCase().includes(query.toLowerCase());
//                });
                
                this.setState({
                    restaurants:restaurants,
                    filteredRestaurants:restaurants
                });
            })
        }
    
        
        //function to handle change in search bar of restaurants
        handleInputChange =(event)=> {
            
            let query= event.target.value;
            let filteredData = this.state.restaurants.filter(restaurant => {
                return restaurant.Restaurant_Name.toLowerCase().includes(query.toLowerCase());
            });
            
            console.log(filteredData.length);
            this.setState({
                query:query,
                query2:"",
                filteredRestaurants:filteredData,
                disable2: (filteredData.length <= 6) ? true : false,
            })
        }
        
        
        
        //function to handle change in search bar of cuisines
        handleInputChange2 =(event)=> {
            
            let query2= event.target.value;
            let filteredData = this.state.restaurants.filter(restaurant => {
                return restaurant.Cuisines.toLowerCase().includes(query2.toLowerCase());
            });
            
            console.log(filteredData.length);
            this.setState({
                query2:query2,
                query:"",
                filteredRestaurants:filteredData,
                disable2: (filteredData.length <= 6) ? true : false,
            })
        }
        
        
        //function to go on previous page
        previousPage=()=>{
          if(this.state.currentPage > 1){
              this.setState({
                currentPage: this.state.currentPage - 1,
                disable1:false,
                disable2:false
              })
          }else{
              this.setState({
                currentPage: this.state.currentPage - 1,
                disable1: true,
                disable2: false
              })
          }
        }
        
        //function to go on next page
        nextPage=()=>{
            
          if (this.state.currentPage < (this.state.filteredRestaurants.length / 6)-2){
              this.setState({
                currentPage: this.state.currentPage + 1,
                disable1:false,
                disable2:false
              })
          }else{
              this.setState({
                currentPage: this.state.currentPage + 1,
                disable1:false,
                disable2:true,
              })
          }
        }   
        
        //sorting the restaurants based on cost (in ascending order)
        sortByCostAsc=()=>{
              
              let sortedRestaurants;
              sortedRestaurants= this.state.filteredRestaurants.sort((a,b)=>{
                 return parseInt(a.Average_Cost_for_two)  - parseInt(b.Average_Cost_for_two);
              })
              
              this.setState({
                  filteredRestaurants:sortedRestaurants
              })
          }
          
        //sorting the restaurants based on cost (in descending order)
          sortByCostDsc=()=>{
              
              let sortedRestaurants;
              sortedRestaurants= this.state.filteredRestaurants.sort((a,b)=>{
                 return parseInt(b.Average_Cost_for_two)  - parseInt(a.Average_Cost_for_two);
              })
              
              this.setState({
                  filteredRestaurants:sortedRestaurants
              })
          }
          
          //sorting the restaurants based on votes (in ascending order)
          sortByVotesAsc=()=>{
              
              let sortedRestaurants;
              sortedRestaurants= this.state.filteredRestaurants.sort((a,b)=>{
                 return parseInt(a.Votes)  - parseInt(b.Votes);
              })
              
              this.setState({
                  filteredRestaurants:sortedRestaurants
              })
          }
          
          //sorting the restaurants based on votes (in descending order)
          sortByVotesDsc=()=>{
              
              let sortedRestaurants;
              sortedRestaurants= this.state.filteredRestaurants.sort((a,b)=>{
                 return parseInt(b.Votes)  - parseInt(a.Votes);
              })
              
              this.setState({
                  filteredRestaurants:sortedRestaurants
              })
          }
          
          //sorting the restaurants based on rating (in ascending order)
          sortByRatingAsc=()=>{
              
              let sortedRestaurants;
              sortedRestaurants= this.state.filteredRestaurants.sort((a,b)=>{
                 return parseInt(a.Aggregate_rating*10)  - parseInt(b.Aggregate_rating*10);
              })
              
              this.setState({
                  filteredRestaurants:sortedRestaurants
              })
          }
          
          //sorting the restaurants based on rating (in descending order)
          sortByRatingDsc=()=>{
              
              let sortedRestaurants;
              sortedRestaurants= this.state.filteredRestaurants.sort((a,b)=>{
                 return parseInt(b.Aggregate_rating*10)  - parseInt(a.Aggregate_rating*10);
              })
              
              this.setState({
                  filteredRestaurants:sortedRestaurants
              })
          }
          
          
   
     
    render(){ 
            return(  
                <div className="container-fluid">
                
                <div className="searchForm">
                <Navbar query= {this.state.query} handleInputChange={this.handleInputChange}
                  query2= {this.state.query2} handleInputChange2={this.handleInputChange2} />
                </div>
                
                <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Restaurant ID</th>
                    <th scope="col">Restaurant Name</th>
                    <th scope="col">Cuisines</th>
                
                    <th scope="col">Average Cost for two &nbsp;
                    <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-success btn-sm" onClick={this.sortByCostDsc}>↑</button>
                    <button type="button" className="btn btn-success btn-sm" onClick={this.sortByCostAsc}>↓</button>
                    </div>
                    </th>
                
                    <th scope="col">Currency</th>
                    <th scope="col">Has Table booking</th>
                    <th scope="col">Has Online delivery</th>
                
                    <th scope="col">Aggregate rating &nbsp;
                    <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-success btn-sm" onClick={this.sortByRatingDsc}>↑</button>
                    <button type="button" className="btn btn-success btn-sm" onClick={this.sortByRatingAsc}>↓</button>
                    </div>
                    </th>
                
                    <th scope="col">Rating color</th>
                    <th scope="col">Rating text</th>
                
                    <th scope="col">Votes
                    <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-success btn-sm" onClick={this.sortByVotesDsc}>↑</button>
                    <button type="button" className="btn btn-success btn-sm" onClick={this.sortByVotesAsc}>↓</button>
                    </div>
                    </th>
                
                  </tr>
                </thead>
                
                <tbody>
                {this.state.filteredRestaurants.slice((this.state.currentPage * 6), (this.state.currentPage * 6) + 6).map(restaurant =>
                  <Restaurant key={restaurant.Restaurant_ID} id={restaurant.Restaurant_ID}
                    name={restaurant.Restaurant_Name} cuisines={restaurant.Cuisines}          avg_cost={restaurant.Average_Cost_for_two} 
                    currency={restaurant.Currency} table_booking={restaurant.Has_Table_booking}   online_delivery={restaurant.Has_Online_delivery}                           rating={restaurant.Aggregate_rating} color={restaurant.Rating_color}         text={restaurant.Rating_text} votes={restaurant.Votes}                        />                                                                                    
                )}
               </tbody>
               </table>

                <center>
                    <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={this.previousPage} disabled={this.state.disable1} className="btn btn-primary">Previous Page</button>
                    <button type="button" onClick={this.nextPage} disabled={this.state.disable2} className="btn btn-primary">Next Page</button>
                    </div>
                </center>

                </div>
            );
     }     
}

export default Restaurants;