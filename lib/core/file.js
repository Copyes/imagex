const fs = require('fs')
const chalk = require('chalk')
const util = require('util')
const path = require('path')

const readdirSync = util.promisify(fs.readdir)

const FILE_TYPE = ['.jpg','.png','.jpeg']

const getFiles = (dir, callback) => {
  readdirSync(dir)
  .then(files => {
    const sf2id = {}
    const len = files.length
    let stats,suffix,filePath
    for(let i = 0; i < len; i++){
      filePath = path.join(dir, files[i])
      stats = fs.statSync(filePath)

      if(stats.isFile()){
        suffix = path.extname(filePath)
        suffix = suffix.toLowerCase()
        if(FILE_TYPE.indexOf(suffix) > -1){
          sf2id[filePath] = i
        } else {
          chalk.red(console.log('============'))
          chalk.red(console.log('[error]: the file type not supported', suffix))
          chalk.red(console.log(filePath))
          chalk.red(console.log('============'))
        }
      }
    }
    callback && callback(sf2id)
  })
  .catch(err => {
    chalk.red(console.log(err))
  })
}
// 删除文件夹及文件夹内容
const deleteDir = (dir) => {
  let files = []
  if(fs.existsSync(dir)){
    files = fs.readdirSync(dir)
    files.forEach((file, index) => {  
      fs.unlinkSync(path.join(dir, file)) 
    })
    fs.rmdirSync(dir)
  }
}

module.exports = {
  getFiles,
  deleteDir
}