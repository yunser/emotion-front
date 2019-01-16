let debug = process.env.NODE_ENV !== 'production'

let imgDomain
let apiDomain
let emotionDomain
if (process.env.NODE_ENV === 'production') {
    imgDomain = 'https://img1.yunser.com'
    // apiDomain = 'https://nodeapi.yunser.com'
    apiDomain = 'https://gifmaker.develophelper.com'
    emotionDomain = 'https://nodeapi.yunser.com'
} else {
    imgDomain = 'https://img1.yunser.com'
    // apiDomain = 'http://localhost:9091'
    // apiDomain = 'https://nodeapi.yunser.com'
    // apiDomain = 'http://localhost:1026'
    apiDomain = 'https://gifmaker.develophelper.com'
    // emotionDomain = 'https://nodeapi.yunser.com'
    emotionDomain = 'http://localhost:1026'
}

module.exports = {
    imgDomain,
    apiDomain,
    emotionDomain,
    debug
}
