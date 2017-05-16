import React, { Component } from 'react'

class Channels extends Component{
    render(){

        return(
            <div className="channel-list-container">
                <div className="channel-desc">
                    <h3 className="channel-name">Free Code Camp</h3>
                    <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png" alt="Channel Logo" className="channel-logo"/>
                    <h3 className="channel-tv-description">#Javascript camp</h3>
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
