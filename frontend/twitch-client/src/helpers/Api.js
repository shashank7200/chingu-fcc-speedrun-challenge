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

                     resolve(streamInfo)
                 })
                 .catch((error) => reject(error))

    })
}