let task1 = [2,3,8]
let task2 = [6,2,3]
let task3 = [4,7,2,8,6]
function solve(arr){
    let nilai = 0
    let lis = []
    for(let i = 0; i < arr.length ; i++){
        nilai += arr[i]
    }
    lis.push(nilai)
    let nilaiTengah = Math.floor(arr.length / 2)
    let ke2 = nilai - arr[nilaiTengah]
    lis.push(ke2)
    let sorting = [...arr].sort((a, b) => b - a)

  
    let current = ke2
    for (let x = 0; x < sorting.length; x++) {
        if (sorting[x] === arr[nilaiTengah]) continue
        current -= sorting[x]
        lis.push(current)
    }

    lis.pop()

    return lis

}


console.log(solve(task1))
console.log(solve(task2))
console.log(solve(task3))


