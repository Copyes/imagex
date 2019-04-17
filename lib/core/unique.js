const fs = require('fs')
const md5 = require('md5')

module.exports = function unique(isUnique, src2id) {
  if(!isUnique) {
    return 
  }

  let md5name = null,
      md52src = {}
  let i = 0
  const len = Object.keys(src2id).length

  for(let src in src2id){
    ++i
    let data = fs.readFileSync(src)
    let md5name = md5(data)

    if(md52src[md5name] !== undefined){
      src2id[src] = md52src[md5name]
    } else {
      md52src[md5name] = src2id[src]
    }
  }
  if(i === len){
    return src2id
  }
}