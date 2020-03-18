import React, { Component } from 'react'


export default class GifList extends Component {
   
    
    render() {
        
        return (
            <div>
                {this.props.gifs.map(g => <img key={g.id} src={g.images.original.url} alt="gif"/>)}
            </div>
        )
    }
}
