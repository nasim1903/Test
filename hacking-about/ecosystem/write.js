const fs = require('fs');

fs.appendFile("data.txt", "Modified by nasim", (error) =>{

    if (error){
        console.log("Error")
    } else {
        console.log("Success")
    }
})