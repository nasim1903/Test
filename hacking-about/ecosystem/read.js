const fs = require('fs')

fs.readFile("data.txt", (error, data) => {

    if (error) {
        console.log("Damn")
    } else [
        console.log(data.toString())
    ]
})

