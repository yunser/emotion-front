let debug = process.env.NODE_ENV !== 'production'

let imgDomain
let apiDomain
if (process.env.NODE_ENV === 'production') {
    imgDomain = 'http://120.79.29.47'
    apiDomain = 'https://gifmaker.develophelper.com'
} else {
    imgDomain = 'http://120.79.29.47'
    // apiDomain = 'https://gifmaker.develophelper.com'
    apiDomain = 'https://gifmaker.develophelper.com'
}

module.exports = {
    imgDomain,
    apiDomain,
    debug
}
