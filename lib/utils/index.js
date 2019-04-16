const fs = require('fs')
const path = require('path')
const util = require('util')
const mkdirp = require('mkdirp')


const mkdir = util.promisify(mkdirp)
const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)

exports.outputFile = (filepath, data, encoding) => 
  mkdir(path.dirname(filepath)).then(() => writeFile(filepath, data, encoding))

exports.readFile = readFile

exports.existPath = fp => 
  new Promise((resolve) => {
    fs.access(fp, err => {
      resolve(!err)
    })
  })