document.write("Array function")

let marks=[95,76,90,86,"ab"];
let mark2=[69,87,90];

for(let a in marks){
    console.log(marks[a])
}

for(let b in marks){
   // document.write("\n")
   document.write("<br>")
    document.write(marks[b]);
}

//join element with array
console.log(marks.join("and"))

//pop the last element from array
console.log(marks.pop())
console.log(marks)

//push new element at the end
console.log(marks.push("not present"))
console.log(marks)

//shift remove element at start of an array
console.log(marks.shift())
console.log(marks)

//unshift add element at thr start
console.log(marks.unshift("fail"))
console.log(marks)

//delete element from given index
//delete marks[0]
//console.log(marks, marks.length)

//concat two array
let b=marks.concat(mark2)
console.log(b)

//sort array alphabattically
console.log(marks.sort())

//reverse the array element
console.log(marks.reverse())

//splice add new elements to the existing array
mark2.splice(1,2,890,892,893,894)
console.log(mark2)

//slice piece of array and return new array
//mark2.slice(2);
console.log(mark2.slice(2,4))

//array.from create array from given string
let sub="Kajal"
let arr=Array.from(sub)
console.log(arr)
let num=2398654
let num2=num.toString();
let arr2=Array.from(num2)
console.log(arr2)

//map function in arrray
marks.map((value)=>{console.log(value)})

//filter array by given condition

let newarr=[20,30,50,40,60,90];

function gt(x){
    return x>30;
}
let n=newarr.filter(gt)
console.log(n)

//reduce array to single value
let k=[5,3,7,5,2,9,8]
 

let j= k.reduce((h1,h2)=>{return h1+h2})
console.log(j)

let check=["kajal","bhakti","drashti"]
console.log(check);
