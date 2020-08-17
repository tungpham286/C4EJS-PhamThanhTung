let start =parseInt(prompt("Enter starting num: "));
let end = parseInt(prompt("Enter ending num: "));
let step = parseInt(prompt("Enter stepping num: "));
console.log(`Print out ${Math.ceil((n-c)/s)} numbers, starting form ${c} and stepping by ${s}:`);

for(let i = c; i<n; i+=s){
    console.log(i)
}