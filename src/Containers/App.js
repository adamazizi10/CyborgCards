import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'

class App extends Component {
    constructor()
    {
        super()
        this.state = 
        {
            cyborgs: [],
            searchfield: ''
        }
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({cyborgs: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render()
    {
    const {cyborgs, searchfield} = this.state;
        const filteredCyborgs = cyborgs.filter(cyborg => {
        return cyborg.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1">Cyborg Cards</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                     <CardList cyborgs={filteredCyborgs} />
                </Scroll>
                
            </div>
        );
    }
}

export default App;
