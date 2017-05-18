import React,{ Component } from 'react'
import Channels from './Channels'
import { getUserInformation, getStreamInformation } from './Api'


class Home extends Component{

    constructor(props){
        super(props)

        this.state ={
            users: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas", "storbeck","brunofin", "comster404"],
            displayNames: [],
            logos : [],
        }
    }

    componentDidMount(){
        const { users } = this.state; let nameString = ""; let logoString = "";
        
        for ( let i =0;i<users.length;i++){
            // Gets user Informations
            getUserInformation(users[i])
            .then((user) => {

                if(user.name === undefined){ user.name = users[i]; user.logo = 'img/closed.png'}
                if(user.logo === null){ user.logo = 'img/null.png'}                
                nameString += user.name+" ";  logoString += user.logo+" "
                let nameArr = nameString.split(' '); let logoArr = logoString.split(' ')
                if(nameArr.length===11){ nameArr.pop(); logoArr.pop()}

                this.setState({ displayNames: nameArr})
                this.setState({ logos: logoArr})
            }).catch((error) => console.error(error))

            // Gets user Stream informations
            getStreamInformation(users[i])
            .then((stream) => {
                
            })
        }
        
    }


    render(){
        const { displayNames, logos } = this.state

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
                    { displayNames.map((data, index) => 
                        <Channels name={ data } logoUrl={ logos[index] } key={ index }/> )}
                </div>
            </div>
        )
    }
}

export default Home
