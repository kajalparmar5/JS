var a="kajal"
var b=26
var c=2.8

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

const students ={
    kajal:512,
    bhakti:514,
    drashti:511
}

console.log(students["bhakti"])

let sv="hello"
let iv=10
console.log(sv)
console.log(iv)
console.log(iv+sv)
let v=iv+sv
console.log(typeof v)
for(let a in students){
    console.log(a+""+students[a])
}
for(let b of students){
    console.log(b)
}

//ternary operator

let t1=5
let t2=10
console.log(t1<t2?t1:t2)

//exponential operator
console.log(t2**t1) //10*10*10*10*10

//conditional statement

/*let age=prompt("what's our age ?")
age =Number.parseInt(age)
if(age>18){
        alert("you are eligible to vote")
}
else{
    alert("not eligible to vote")
}*/

//switch

/*let day=prompt("enter day")
 day=Number.parseInt(day)

 switch(day){
    case 1:
        alert("today is sunday")
        break;
        case 2:
        alert("today is monday")
        break;
        case 3:
        alert("today is tuesday")
        break;
        case 1:
        alert("today is wednesday")
        break;
        case 1:
        alert("today is thursday")
        break;
        case 1:
        alert("today is friday")
        break;
        case 1:
        alert("today is saturday")
        break;
        default:
            alert("invalid day")
 }*/

 let num=prompt("enter number")
 num=Number.parseInt(num)
  if(num%2==0 && num%3==0){
    alert("number is divisible by 2&3")
  }
  else{
    alert("number is not divisible by 2&3")
  }


