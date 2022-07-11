function getBigger (a,b){
    if (a > b) {
        return a;
    } else {
        return b;
    }
};


console.log(getBigger(10,100))
console.log(getBigger(10,6))

function multiplyNum (a, b, c){
    return a* b *c;
}

console.log(multiplyNum(5,5,5))

function greet(name, time){
    if (time == 'AM'){
        return `Good morning, ${name}`;
    } else {
        return `Good afternoon, ${name}`
    }
}

console.log(greet('Nasim', 'PM'))


function oddOneOut (a,b,c){
    
    if(a !== b,c){
        return a
    } else if (b !== a,c){
        return b
    } else if (c !== a,b){
        return c
    } else if (a,b,c === a,b,c || a,b,c !== a,b,c){
        return null
    }
}

console.log(oddOneOut(5,3,4))

const countdown = (start) => {
    for (let i = start; i >=0; i--){
        console.log(i);
    }
    console.log('BLAST OFF!')
}

countdown(5)

const getBiggerer = (a, b) => {
    if (a>b){
        console.log(a);
    } else {
        console.log(b);
    }
}


const colour = (color) => {

    switch (color){
        case 'red':
            console.log('Bad')
            break;
        case 'green':
            console.log('Okay..')
            break;
        case 'blue':
            console.log('Perfect')
            break;
    }

}

const arr = [1, 2, 3];

arr.push(4);

console.log(arr.indexOf(4))


const containAll = (a, b) =>{
    if (a == b){
        return true;
    }
}

const myFunc = (arr1, arr2) => {
    
    for (let i of arr1){
        if(!arr2.includes(i)){
            return false
        }
    }

    return true;

}

console.log(myFunc([1,2,3],[1,2]));
console.log(myFunc([123],[123]));
 

const countIncluded = (val, arr) => { 

    let counting = 0;

    for (let items of arr) {
        if (items == val){
            counting++
        }
    }

    console.log(counting);

};

countIncluded(5, [1,2,3,5,5,5,5]);

// Write a function that takes 3 arguments
// Two values and an array
// Return the value that appears fewer times in the array
// constGetSmallerCount(1, 2, [1, 1, 2, 3, 4]) -> 2
// constGetSmallerCount(1, 2, [1, 2, 2, 3, 1, 2, 3, 4, 2]) -> 1


const fewTimes = (val1, val2, arr) => {

    let count1 = 0;
    let count2 = 0;

    for (let items of arr){
        if (val1 == items){
            count1++
        } else if (val2 == arr){
            count2++
        };

        if (count1 > count2){
            return val2
        } else {
            return val1
        }
    }
};

console.log(fewTimes(1,2,[1,1,1,1,2,2,2,3]))

const basicObj = {
    name: 'Nasim',
    age: 19,
    nationality: 'British'
} 



// Write a function
// That takes an array of user posts
// And returns the username of the the poster of the most-liked post

// Optional: create a second function that
// returns the text of the top 3 posts in order

data = [
    {
        text: "some text in a string",
        likes: 3,
        poster: "Mo"
    },
    {
        text: "some text in a string",
        likes: 8,
        poster: "Nas"
    }
]


const userPost = (post) => {
    let count1 = 0;
    let count2 = 0;

    if (data[0].likes > data[1].likes){
        count1++
    } else {
        count2++
    } 
    
    if (count1 > count2){
        return data[0].poster
    } else {
        return data[1].poster
    }
};

console.log(userPost())