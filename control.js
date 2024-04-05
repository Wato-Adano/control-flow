//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
function number(items){
    let newvalue1=items.slice(0,4)
    let newvalue2=items.slice(-2)

    newvalue1.forEach(i=>{
        console.log(i+10);
    })
    newvalue2.forEach(i=>{
        console.log(i+5)
    })

  }
number([10,12,4,80,5,73,20,5,8])

//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum =[1,2,3,4,5,6,7,8,9];
let index=0;
let indx=[4]
while(index<Array.length){
    if(arrNum[index]===indx){
        break;
    }
}
console.log



//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
let fruits= ['apple','plum','banana','strawberries','kiwi'];
let y =0;
while(y<4){
    y++;
    if(y % 2)
    continue;
}
console.log(fruits[y])



//Write a function that accepts an array of strings and console.logs each element using a for loop.
let people=["Wato", "Adano","susan","Laura"]
function arr(names){
    for (let i =0; i<names.length; i++){

    }
}
arr(people)
//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.
function reverses(items){
    let num= true;
    while(num){
        console.log(item.split("").join(""));
        break;
    }
}
reverses("school")