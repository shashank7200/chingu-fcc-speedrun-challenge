import React,{ Component } from 'react'
import Channels from './Channels'
import { get } from 'axios'

class Home extends Component{

    constructor(props){
        super(props)


    }
    
    getChannels(status="all"){
        
    }


    render(){
        return(
            <div className="container">
                <div className="logo">
                    <img src="/img/logo.png" alt="Twitch logo"/>
                </div>
                
                <div className="channel-container">
                    <div className="status-header">
                        <ul>
                            <li className="active">All</li>
                            <li>Online</li>
                            <li>Offline</li>
                        </ul>
                    </div>
                    <hr/>                
                <Channels />
                </div>
            </div>
        )
    }
}

export default Home
