let string1="hello world"
let string2="my dog is my world dog name is john "
let string3="HELLO"
let string4="world"
let string5="           kajal        "
string6="z"
console.log(string1.length)
console.log(string1.slice(2))
console.log(string1.slice(2,5))
console.log(string1.substring(2,4))
console.log(string1.substr(3))
console.log(string1.replace("world","kajal"))
console.log(string1)
console.log(string2)
console.log(string2.replaceAll("dog","cat"))
console.log(string3.toLowerCase())
console.log(string4.toUpperCase())
console.log(string3.concat(string4))
console.log(string5)
console.log(string5.trim())
console.log(string5.trimStart())
console.log(string5.trimEnd())
console.log(string6.padStart(5,"x"))
console.log(string6.padEnd(4,"K"))
console.log(string1.charAt(5))
console.log(string1.charAt(6))
console.log(string1.charCodeAt(0))
console.log(string3.charCodeAt(0))
let char=string1[0]
console.log(char)//h
console.log(string1.charAt(12))//empty string
console.log(string1[12])//undefine
let splt=string2.split("|")
console.log(splt)
console.log(string2)
console.log(string2.replace("dog","kajal"))
