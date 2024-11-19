//const fibonacci = function(member) {


let fibArray = [1, 1, 2, 3, 5, 8];

for (i = 0; i <= 25; i++) {
    let newMember = fibArray.at(-2) + fibArray.at(-1);
    fibArray.push(newMember);
};

//find nth member of fib array
//let index = fibArray.at(member - 1);
//return member;

//};

console.log(fibArray);

 
// Do not edit below this line
//module.exports = fibonacci;
