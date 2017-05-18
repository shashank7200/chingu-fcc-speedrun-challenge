import React, { Component } from 'react'

class Channels extends Component{
    render(){
        let { name, logoUrl } = this.props
        return(
            <div className="channel-list-container">
                <div className="channel-desc">
                    <h3 className="channel-name">{ name }</h3>
                    <img src={ logoUrl } alt="Channel Logo" className="channel-logo"/>
                    <h3 className="channel-tv-description">Hang out</h3>
                </div>
                <div className="channel-status">
                    <img src="https://media.giphy.com/media/EXHXTLY7ntczK/giphy.gif" alt="Channel Live Preview" className="channel-live-preiew"/>
                    <h2 className="channel-tv-status">OFFLINE</h2>
                </div>
            </div>
        )
    }
}

export default Channels
