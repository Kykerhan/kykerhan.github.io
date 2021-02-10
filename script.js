const arr = [10, 5, 10]


const sum1 = arr.reduce(function(total, amount){
    if(total > 9){
        return total += amount
    }

})
console.log(sum1)


let a = "10"
let b = 10
if (a == b)
    console.log("a = b")