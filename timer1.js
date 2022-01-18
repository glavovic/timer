argv = process.argv.slice(2)

let arr = argv.map(x => parseInt(x))

arr = arr.filter(x => Number.isInteger(x));

console.log(arr)
const timer = (arr) => {
  for (let num of arr) {
    if(!num === NaN || !num >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, num * 1000)  
    }
  }
}

return timer(arr)
