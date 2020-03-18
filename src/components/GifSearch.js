import React, { Component } from 'react'

export default class GifSearch extends Component {
    
    state = {
        searchTerm: ""
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSearch(this.state.searchTerm)
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }
    
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search Gifs</label>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }
}
