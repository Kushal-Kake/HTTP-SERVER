const fs = require('fs')
const content = (`
<h1>Hello World</h1>
<p>This is Kushal Kumar K</p>
`)

fs.writeFile('./index.html', content, 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(`The file is written as : ${content}`)
})