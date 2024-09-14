// let array = [
//     [1, 2, 4], 
//     [5, 10, 15],
//     [1], 
//     [20, 6, 8], 
//     [1, 0, 5, 7, 3, 6,]
// ];


// for (let i = 0; i < array.length; i++) {
    
//     for (let j = 0; j < array[i].length; j++) {

//         console.log(array[i][j]);
//     }

// }


let array1 = [
    [5,6,8],
    [1,9,0],
    [11,3,4]
]

let array2 = [
    [2,9,8],
    [1,6,0],
    [12,7,5]
]
let array3 = [
    [],
    [],
    []
]
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

      let a  = array1[i][j]+array2[i][j]
      console.log(a);
        array3[i].push(array1[i][j]+array2[i][j])        
    }
     
}
console.log(array3);






