const path = require('path')

console.log(path.sep)

const filePath =
	 path.join('/content','subfolder')//,'a.txt')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

console.log(__dirname)
