import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component {
   
    state = {
        searchTerm: "",
        gifs: []
    }

    handleSearchTerm = (d) => {
        this.setState({
            ...this.state,
            searchTerm: d})
    }
    
    componentDidUpdate() {
        let myKey=process.env.REACT_APP_GIF_API_KEY
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=${myKey}&rating=g`)
        .then(res => res.json())
        .then(gifObject => this.setState({gifs: gifObject.data.slice(0, 3)}))
    }
    render() {
       console.log(this.state.gifs)
        return (
            
            <div>
               <GifList gifs={this.state.gifs}/>
               <GifSearch handleSearch={this.handleSearchTerm}/>
            </div>
        )
    }
}
