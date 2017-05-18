import { get } from 'axios'

module.exports.getUserInformation = (username) => {

     return new Promise((resolve, reject) => {

             get(`https://wind-bow.glitch.me/twitch-api/users/${username}`)
                 .then(({
                     data: userInfo
                 }) => {
                     let usernames={}
                     usernames.name = userInfo.display_name
                     usernames.logo = userInfo.logo
                     resolve(usernames)
                 })
                 .catch((error) => reject(error))
     })
    }

module.exports.getStreamInformation  = (username) => {

    return new Promise(( resolve, reject) => {
        
        get(`https://wind-bow.glitch.me/twitch-api/streams/${username}`)
                 .then(({
                     data: streamInfo
                 }) => {
                     let userStream = {}

                     if( streamInfo.stream === null){
                         userStream.currentStream = 'Stream Closed'
                         userStream.status = "offline"
                         userStream.preview = 'img/offline.gif'
                     }else{
                        userStream.status = streamInfo.stream.stream_type
                        userStream.currentStream = streamInfo.stream.game
                        userStream.preview = streamInfo.stream.preview.medium
                     }

                     resolve(userStream)
                 })
                 .catch((error) => reject(error))

    })
}