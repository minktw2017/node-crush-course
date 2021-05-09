const fs = require('fs')

// read file

// fs.readFile('./doc/blog1.txt', (err, data) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(data.toString())
//   }

// })

// writing file

// fs.writeFile('./doc/blog1.txt', 'hello world', () => {
//   console.log('File was written!')
// })

// fs.writeFile('./doc/blog2.txt', 'hello world', () => {
//   console.log('File was written!')
// })

// directories

fs.mkdir('./assets', (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('Folder created')
  }
})

// deleting files
