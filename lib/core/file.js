const fs = require('fs')
const chalk = require('chalk')

const getFiles = (dir, callback) => {
  fs.readdir(dir, (err, files) => {
    if(err) {
      chalk.red(console.log(err))
      return
    }

    const sf2id = {}
    let stats,suffix,filePath
    
  })
}


module.exports = {}