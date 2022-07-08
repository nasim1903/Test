const num = Math.random();

if (num < 0.3){
    console.log("low");
} else if (num > 0.7){
    console.log("high");
} else if (num >= 0.4 && num <= 0.6){
    console.log("medium");
} else if (num === 0.734) {
    console.log("secret answer");
};


let count = 10

while (count >=0){
    if (count % 2 == 0){
        console.log(count)
    }
    count--
}


for (let i = 0; i < 10; i++){
    if (i % 2 != 0){
        console.log(i)
    }
};