//1.
function Sum(...a){
    let answer = 0
    for(i = 1; i < arguments.length; i++){
        answer += arguments[i]
    }
    return answer
}
 
console.log(Sum())
console.log(Sum(1))
console.log(Sum(1,2))

//2.
const FunctionMain = (func) =>{
    return func(2)
}
console.log(FunctionMain(func=(e)=>e*e))
//3.
function plus(num1,num2) {
    return num1 + num2
       
}
function multiply(num1,num2) {
    let resultmultiply = plus(5,6) * (num1 + num2)
        return resultmultiply
}
console.log(multiply(5,4))

//4.
const getFerqOfWords = (sentence) =>{
    if (sentence === null || sentence === undefined) {
        return undefined;
    }
    let obj = {}
    const Splitsentence = sentence.toLowerCase().split(" ")
    for(let i of Splitsentence){
        if (obj[i]){
            obj[i] += 1
        }else{
            obj[i] = 1
        }
    }
    return obj
}
 
console.log(getFerqOfWords("Today is present and present is your gift"))
console.log(getFerqOfWords('Do you best just do it'))
console.log(getFerqOfWords(null))
console.log(getFerqOfWords(undefined))
